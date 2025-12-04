// Use Vite environment variable for client-side
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

// Initialize Gemini AI - using @google/genai package
let genAI: any = null;

const SYSTEM_INSTRUCTION = `
You are "Digi", a senior technical consultant for DigiEmp, a digital agency specializing in:
1. Websites & Apps (E-commerce, SaaS, Web Apps, Portfolios) - Price: ₹1999
2. Business Tools/Dashboards (CRM, Analytics, Automation) - Price: ₹1499
3. Videos & Content (Promotional, Tutorials, Animated Videos) - Price: ₹40/sec

Your goal is to help potential clients clarify their project needs. 
- Ask clarifying questions if the user is vague.
- Suggest specific technologies or features based on their requests.
- Recommend one of our 3 core service categories.
- Highlight our guarantees: 7-day delivery, 100% money-back guarantee, full source code ownership.
- Be professional, concise, and enthusiastic about technology.
- Do not provide code, just high-level architectural or creative advice.
- End your responses by explicitly directing them to the Contact section below to start their project (refer to it as the "Contact section").
`;

export const sendMessageToGemini = async (
  message: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my AI connection is currently offline (Missing API Key). Please contact the team directly.";
  }

  // Initialize Gemini AI if not already initialized
  if (!genAI && apiKey) {
    try {
      const { GoogleGenAI } = await import('@google/genai');
      genAI = new GoogleGenAI({ apiKey });
    } catch (error) {
      console.error("Failed to initialize Gemini:", error);
      return "I'm having trouble initializing the AI. Please refresh the page and try again.";
    }
  }

  try {
    // Use @google/genai API
    const chat = genAI.chats.create({
      model: 'gemini-2.0-flash-exp',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return `I'm having trouble connecting to the server right now. ${error.message || 'Please try again later.'}`;
  }
};