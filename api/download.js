import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'texts.txt');

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('No texts yet.');
  }

  const content = fs.readFileSync(filePath, 'utf8');

  res.setHeader('Content-Disposition', 'attachment; filename="texts.txt"');
  res.setHeader('Content-Type', 'text/plain');

  res.status(200).send(content);
}
