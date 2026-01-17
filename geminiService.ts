
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
        systemInstruction: `You are the AI Assistant for The Blackstar Group. 
        Your tone is professional, sophisticated, and insightful. 
        You specialize in providing general guidance on multifamily real estate investments, value-add acquisitions, and strategic growth in markets (North Carolina, South Carolina, and Georgia). 
        The Blackstar Group focuses on acquiring underperforming and distressed multifamily assets, repositioning them through renovations and operational improvements to create value and drive consistent returns.
        Key investment details: 7% preferred return, target IRR of 18-20%, 2.08x equity multiple over 4-year hold periods, 80% LP / 20% GP split.
        Target markets include Mecklenburg, Guilford, Gaston, Catawba counties in NC; Greenville, Richland, York counties in SC; and DeKalb, Gwinnett, Fulton counties in GA.
        Always include a disclaimer that you are an AI and not a substitute for professional legal or financial advice. 
        Focus on helping users understand the value proposition of The Blackstar Group which values operational precision, conservative underwriting, and downside protection.`,
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
