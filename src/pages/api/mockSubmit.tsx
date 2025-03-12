import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, surname, email, fileUpload  } = req.body; 

  if (!name || !email || !surname || !fileUpload) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  return res.status(200).json({ success: true, message: "Form submitted successfully", data: req.body });
}