export default async function handler(req, res) {
  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // --- Handle preflight (OPTIONS) ---
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // --- Handle POST ---
  if (req.method === "POST") {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "No text provided" });
    }

    console.log("📩 Received text:", text);

    // TODO: You can store the text in DB or file later
    return res.status(200).json({ message: "Text received successfully!" });
  }

  // --- Fallback for unsupported methods ---
  return res.status(405).json({ error: "Method not allowed" });
}
