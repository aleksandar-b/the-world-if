import axios from "axios";

export const openAiRequest = async (prompt) => {
    return axios.post('https://api.openai.com/v1/completions',
        {
            "model": "text-davinci-003",
            "prompt": prompt,
            "temperature": 0.7,
            "max_tokens": 1283,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        },
        {
            headers: {
                'Authorization': 'Bearer ' + import.meta.env.VITE_OPENAI_API_KEY,
                'OpenAI-Organization': 'org-Y75v95YV63GWfZk7f5BpEMk7',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    )
}