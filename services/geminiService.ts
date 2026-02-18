
import { GoogleGenAI } from "@google/genai";

// Use gemini-3-flash-preview for simple text Q&A tasks as per guidelines
export const getGeminiResponse = async (prompt: string) => {
  // Always initialize GoogleGenAI within the function call to use the latest API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "შენ ხარ BetterProgrammer-ის პროგრამირების ასისტენტი. უპასუხე კითხვებს პროგრამირებაზე ქართულ ენაზე მოკლედ და გასაგებად. დაეხმარე მომხმარებელს სწორი წიგნის შერჩევაში.",
      }
    });
    
    // Access the text property directly on GenerateContentResponse
    return response.text || "ბოდიში, პასუხის მიღება ვერ მოხერხდა.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "შეცდომაა დაკავშირებისას.";
  }
};