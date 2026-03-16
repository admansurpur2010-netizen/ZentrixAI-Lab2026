export default async function handler(req, res) {

const HF_TOKEN = process.env.HF_TOKEN;

if(req.method !== "POST"){
return res.status(405).json({error:"Method not allowed"});
}

try{

const response = await fetch(
"https://router.huggingface.co/hf-inference/models/google/flan-t5-small",
{
method:"POST",
headers:{
"Authorization": `Bearer ${HF_TOKEN}`,
"Content-Type":"application/json"
},
body: JSON.stringify({
inputs: req.body.userText
})
}
);

const data = await response.json();

res.status(200).json(data);

}catch(err){
res.status(500).json({error:"AI request failed"});
}

}
