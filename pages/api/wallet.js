import path from 'path';
import { promises as fs } from 'fs';

const jsonDirectory = path.join(process.cwd(), 'json');
const dataFilePath = path.join(jsonDirectory, 'data.json')

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    res.status(200).json(JSON.parse(fileContents));
  } else if (req.method === 'POST') {
    const fileContents = await fs.writeFile(dataFilePath, req.body, 'utf8');
    res.status(200).json({ success: true});
  }

}