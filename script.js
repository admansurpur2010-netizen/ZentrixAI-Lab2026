const chatBoard=document.getElementById('chatBoard');
const userInput=document.getElementById('userInput');
const plusMenu=document.getElementById('plusMenu');
const chatMenu=document.getElementById('chatMenu');

function sendMessage(){
let msg=userInput.value.trim();
if(msg==='') return;
chatBoard.innerHTML+=`<div class="message user">You: ${msg}</div>`;
chatBoard.innerHTML+=`<div class="message ai">AI: Thinking...</div>`;
userInput.value='';
chatBoard.scrollTop=chatBoard.scrollHeight;
}

function togglePlusMenu(){
if(plusMenu.style.display==='flex'){
plusMenu.style.display='none';
}else{
plusMenu.style.display='flex';
plusMenu.style.flexDirection='column';
}
}

function showChatMenu(){
if(chatMenu.style.display==='flex'){
chatMenu.style.display='none';
}else{
chatMenu.style.display='flex';
chatMenu.style.flexDirection='column';
}
}

function toggleTheme(){
document.body.classList.toggle('dark-theme');
document.body.classList.toggle('light-theme');
}

function newChat(){
chatBoard.innerHTML='';
alert('New Chat started!');
}

function switchTool(tool){
alert(tool + ' clicked!');
}

function renameChat(){
alert('Rename clicked!');
  }
