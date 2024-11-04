// src/pages/api/imageGen.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

export default async function handler(_req, res) {
  try {
    const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);

    // Upload the file (adjust file path as necessary)
    const uploadResult = await fileManager.uploadFile("images/fan.jpg", {
      mimeType: "image/jpeg",
    });

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([
      "Return one or two word name for the main subject in the picture.",
      {
        fileData: {
          fileUri: uploadResult.file.uri,
          mimeType: uploadResult.file.mimeType,
        },
      },
    ]);

    // Send the result back to the client
    res.status(200).json({ text: result.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating content" });
  }
}
