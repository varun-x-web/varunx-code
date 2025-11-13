// File: api/save-text.js
export default async function handler(req, res) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // --- Handle preflight (CORS OPTIONS) ---
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // --- Handle POST ---
  if (req.method === "POST") {
    try {
      const { text } = req.body || {};
      console.log("Received sessionid:", text);

      // 👉 TODO: Replace with your real persistence logic
      // e.g. save to DB, send to Discord webhook, etc.
      return res.status(200).json({ ok: true, received: text });
    } catch (err) {
      console.error("Handler error:", err);
      return res.status(500).json({ ok: false, error: err.message });
    }
  }

  // --- Unsupported method ---
  res.setHeader("Allow", ["POST", "OPTIONS"]);
  return res.status(405).json({ error: "Method Not Allowed" });
}
