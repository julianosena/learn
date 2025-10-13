import OpenAI from "openai";
import 'dotenv/config'

if (!process.env.OPENAI_API_KEY) {
    throw new Error("OpenAI API key is missing or invalid.");
}

export default new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});