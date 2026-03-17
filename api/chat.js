export default async function handler(req, res) {

const HF_TOKEN = process.env.HF_TOKEN;

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {

const response = await fetch(
"https://router.huggingface.co/hf-inference/models/mistralai/Mistral-7B-Instruct-v0.2",
{
method: "POST",
headers: {
Authorization: `Bearer ${HF_TOKEN}`,
"Content-Type": "application/json"
},
body: JSON.stringify({
inputs: req.body.userText,
parameters: {
max_new_tokens: 200,
temperature: 0.7
}
})
}
);

const data = await response.json();

res.status(200).json(data);

} catch (err) {
res.status(500).json({ error: "AI request failed" });
}

}
