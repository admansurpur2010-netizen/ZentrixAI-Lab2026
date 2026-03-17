export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {

const userText = req.body.userText;

const response = await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(userText)}&botname=Zentrix&ownername=Dhananjay`);

const data = await response.json();

res.status(200).json({
generated_text: data.message
});

} catch (err) {
console.error(err);
res.status(500).json({ error: "AI request failed" });
}

}
