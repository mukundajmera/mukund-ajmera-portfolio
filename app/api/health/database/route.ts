import { getDatabasePool } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const pool = getDatabasePool();
  if (!pool) {
    return Response.json({ status: "unavailable", database: "not configured" }, { status: 503 });
  }

  try {
    await pool.query("SELECT 1");
    return Response.json({ status: "ok", database: "connected" });
  } catch {
    return Response.json({ status: "unavailable", database: "not connected" }, { status: 503 });
  }
}
