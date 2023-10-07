import {openAiRequest} from "@/services/open-ai";

export const newsAiResponse = async (prompt) => {
    return openAiRequest(prompt);
}