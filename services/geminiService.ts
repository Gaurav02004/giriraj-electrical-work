import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI SDK with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key is missing. Please contact the administrator.";
  }

  try {
    const systemPrompt = `You are a helpful, professional, and safety-conscious AI assistant for "GIRIRAJ ELECTRICALS WORKS", a premier electrical company in Kolkata. 
    
    Company Info:
    - Name: GIRIRAJ ELECTRICALS WORKS
    - Location: 9C BEDIA DANGA 1ST LANE KOLKATA 700039
    - Phone: 9830257805, 9007168561
    - Services: Residential wiring, Commercial panels, EV Charging, Smart Home, Emergency Repairs.
    - Hours: Mon-Fri 8am-6pm, 24/7 Emergency Service.

    Your Role:
    1. Answer questions about electrical safety, services we offer, and basic troubleshooting.
    2. If a user asks for specific pricing, explain that it varies by job complexity and encourage them to call for a free quote.
    3. ALWAYS PRIORITIZE SAFETY. If a user describes a dangerous situation (sparks, burning smell, smoke, flickering main lines), tell them to turn off the main circuit breaker IMMEDIATELY if safe to do so and call our emergency line at 9830257805.
    4. Keep answers concise (max 3 sentences).
    5. Be friendly, professional, and use "Namaste" if appropriate for the Kolkata context.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this time. Please call 9830257805.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base. For immediate assistance, please call us directly at 9830257805.";
  }
};