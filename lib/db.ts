import mysql, { type Pool } from "mysql2/promise";

declare global {
  // Keep one pool across Next.js development reloads.
  var portfolioDbPool: Pool | undefined;
}

function databaseConfig() {
  const databaseUrl = process.env.DATABASE_URL;

  if (databaseUrl) {
    try {
      const url = new URL(databaseUrl);
      return {
        host: url.hostname || "127.0.0.1",
        port: Number(url.port || 3306),
        database: decodeURIComponent(url.pathname.replace(/^\//, "")),
        user: decodeURIComponent(url.username),
        password: decodeURIComponent(url.password),
      };
    } catch {
      return null;
    }
  }

  const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
  if (!DB_NAME || !DB_USER || DB_PASSWORD === undefined) return null;

  return {
    host: DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT || 3306),
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
  };
}

export function getDatabasePool(): Pool | null {
  const config = databaseConfig();
  if (!config) return null;

  globalThis.portfolioDbPool ??= mysql.createPool({
    ...config,
    connectionLimit: 2,
    enableKeepAlive: true,
    waitForConnections: true,
    queueLimit: 4,
  });

  return globalThis.portfolioDbPool;
}
