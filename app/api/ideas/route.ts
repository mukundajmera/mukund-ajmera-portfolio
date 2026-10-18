import { getDatabasePool } from "@/lib/db";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

export const dynamic = "force-dynamic";

const MAX_LENGTH = 280;
const MAX_BODY_BYTES = 4096;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ message: "The idea is too long." }, { status: 413 });
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return Response.json({ message: "The idea is too long." }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return Response.json({ message: "Please send a valid idea." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ message: "Please send a valid idea." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  if (typeof fields.website === "string" && fields.website.trim()) {
    return Response.json({ message: "Thanks. Your idea was received." }, { status: 202 });
  }

  if (typeof fields.idea !== "string") {
    return Response.json({ message: "Please enter an idea." }, { status: 400 });
  }

  const idea = fields.idea.trim();
  const length = Array.from(idea).length;
  if (!length) return Response.json({ message: "Please enter an idea." }, { status: 400 });
  if (length > MAX_LENGTH) {
    return Response.json({ message: "Please keep your idea to 280 characters." }, { status: 400 });
  }

  const pool = getDatabasePool();
  if (!pool) {
    return Response.json({ message: "Saving is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS portfolio_ideas (
        id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
        idea VARCHAR(280) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
    const [insertResult] = await pool.execute<ResultSetHeader>(
      "INSERT INTO portfolio_ideas (idea) VALUES (?)",
      [idea],
    );
    const [rows] = await pool.execute<RowDataPacket[]>(
      "SELECT id, created_at FROM portfolio_ideas WHERE id = ? LIMIT 1",
      [insertResult.insertId],
    );
    const saved = rows[0];

    if (!saved) throw new Error("Saved row could not be verified");

    return Response.json({ message: "Thanks. Your idea was saved.", id: String(saved.id) }, { status: 201 });
  } catch {
    return Response.json({ message: "Saving is temporarily unavailable. Please try again later." }, { status: 503 });
  }
}
