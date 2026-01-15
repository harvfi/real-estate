
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getInvestmentAdvice = async (query: string) => {
  if (!API_KEY) {
    return "API Key not configured. Please check your environment.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are the AI Assistant for Blackstar Investments. 
        Your tone is professional, sophisticated, and insightful. 
        You specialize in providing general guidance on real estate, wealth management, and strategic growth. 
        Always include a disclaimer that you are an AI and not a substitute for professional legal or financial advice. 
        Focus on helping users understand the value proposition of a firm like Blackstar Investments which values excellence, transparency, and legacy building.`,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 0 }
      },
    });

    return response.text || "I'm sorry, I couldn't process that request at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to our intelligence engine. Please try again later.";
  }
};
