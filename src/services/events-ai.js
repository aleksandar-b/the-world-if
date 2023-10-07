import {openAiRequest} from "@/services/open-ai";

export const eventsAiResponse = async ({ eventName }) => {

    const prompt = `Event is: ${eventName}\n\nGenerate 6 possible consequences in the following json format { name: '', category: '' }`;

    return openAiRequest(prompt);
}