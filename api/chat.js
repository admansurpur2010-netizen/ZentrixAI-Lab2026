export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {

const text = req.body.userText.toLowerCase();

let reply = "";

if(text.includes("hello")){
reply = "Hello! I am Zentrix AI 🤖";
}
else if(text.includes("how are you")){
reply = "I am doing great! Tell me how can I help you.";
}
else if(text.includes("your name")){
reply = "My name is Zentrix AI.";
}
else if(text.includes("bye")){
reply = "Goodbye! Have a nice day 👋";
}
else{
reply = "You said: " + text;
}

res.status(200).json({
generated_text: reply
});

} catch (err) {
res.status(500).json({ error: "AI request failed" });
}

}
