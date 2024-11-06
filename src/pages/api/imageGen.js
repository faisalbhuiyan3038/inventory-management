// src/pages/api/imageGen.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";
import { writeFile } from 'fs/promises';
import path from 'path';
import os from 'os';

export default async function handler(_req, res) {

  const base64ToBuffer = (base64String) => {
    // Remove the data URL prefix if it exists
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    // Convert base64 to buffer
    return Buffer.from(base64Data, 'base64');
  };

  try {
    console.log("entered function");
    const { base64Image } = _req.body;
    console.log(base64Image);

    if (!base64Image) {
      return res.status(400).json({ error: "No Image Provided" });
    }

    // Convert base64 to buffer
    const imageBuffer = base64ToBuffer(base64Image);
    // Create a temporary file path
    const tempFilePath = path.join(os.tmpdir(), `upload-${Date.now()}.jpg`);

    // Write the buffer to a temporary file
    await writeFile(tempFilePath, imageBuffer);

    const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);

    // Upload the file (adjust file path as necessary)
    const uploadResult = await fileManager.uploadFile(tempFilePath, {
      mimeType: "image/jpeg",
      displayName: "uploaded_image",
    });
    console.log("uploaded file", uploadResult);

    // Clean up: delete the temporary file


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
