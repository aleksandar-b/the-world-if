import axios from "axios";

export const getOpenAIResponse = async (prop) => {
    return axios.post('https://api.openai.com/v1/completions',
        {
            "model": "text-davinci-003",
            "prompt": prop,
            "temperature": 0.7,
            "max_tokens": 1283,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        },
        {
            headers: {
                'Authorization': 'Bearer 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',
                'OpenAI-Organization': 'org-Y75v95YV63GWfZk7f5BpEMk7',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    )
}