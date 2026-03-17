export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {

const response = await fetch("https://api.affiliateplus.xyz/api/chatbot", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
message: req.body.userText,
botname: "Zentrix AI",
ownername: "Dhananjay"
})
});

const data = await response.json();

res.status(200).json({
generated_text: data.message
});

} catch (err) {
res.status(500).json({ error: "AI request failed" });
}

}
