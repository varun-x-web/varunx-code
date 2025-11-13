export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "No text provided" });
  }

  console.log("📩 Received text:", text);
  // here you could write to a DB or email service if desired

  return res.status(200).json({ message: "Text received successfully!" });
}
