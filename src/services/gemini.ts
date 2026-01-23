import { GoogleGenAI } from "@google/genai";
export const getGeminiResponse = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: [{ parts: [{ text: prompt }] }],
    config: { systemInstruction: "You are the Supreme Architect of AISAHAB ∞Ω." }
  });
  return response.text;
};
