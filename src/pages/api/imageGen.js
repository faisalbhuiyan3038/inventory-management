// src/pages/api/imageGen.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { Readable } from "stream";

// Helper function to convert base64 to a readable stream
function base64ToReadableStream(base64String) {
  const binaryData = Buffer.from(base64String, "base64");
  const readableStream = new Readable();
  readableStream.push(binaryData);
  readableStream.push(null); // Mark the end of the stream
  return readableStream;
}

export default async function handler(_req, res) {
  try {
    console.log("entered function");
    const { base64Image } = req.body;

    if (!base64Image) {
      return res.status(400).json({ error: "No Image Provided" });
    }

    const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);

    const imageStream = base64ToReadableStream(base64Image);

    // Upload the file (adjust file path as necessary)
    const uploadResult = await fileManager.uploadFile(imageStream, {
      mimeType: "image/jpeg",
    });
    console.log("uploaded file");

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
