// SIDEBAR + OVERLAY
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if(menuToggle){
menuToggle.addEventListener("click", () => {

sidebar.classList.toggle("showSidebar");
overlay.classList.toggle("showOverlay");

});
}

if(overlay){
overlay.addEventListener("click", () => {

sidebar.classList.remove("showSidebar");
overlay.classList.remove("showOverlay");

});
}


// THREE DOT MENU
function showChatMenu(){

const menu = document.getElementById("chatMenu");

if(menu.style.display === "flex"){
menu.style.display = "none";
}else{
menu.style.display = "flex";
}

}


// PLUS MENU
function togglePlusMenu(){

const menu = document.getElementById("plusMenu");

if(menu.style.display === "flex"){
menu.style.display = "none";
}else{
menu.style.display = "flex";
}

}


// CLOSE MENUS WHEN CLICK OUTSIDE
document.addEventListener("click",(e)=>{

const chatMenu = document.getElementById("chatMenu");
const plusMenu = document.getElementById("plusMenu");

if(chatMenu && !e.target.closest(".dots")){
chatMenu.style.display = "none";
}

if(plusMenu && !e.target.closest("#plusBtn")){
plusMenu.style.display = "none";
}

});


// THEME TOGGLE
function toggleTheme(){

const body = document.body;

if(body.classList.contains("dark-theme")){
body.classList.remove("dark-theme");
body.classList.add("light-theme");
}else{
body.classList.remove("light-theme");
body.classList.add("dark-theme");
}

}


// NEW CHAT
function newChat(){

const chatBoard = document.getElementById("chatBoard");
chatBoard.innerHTML = "";

}


// SEND MESSAGE
function sendMessage(){

const input = document.getElementById("userInput");
const chatBoard = document.getElementById("chatBoard");

if(input.value.trim() === "") return;

const userMsg = document.createElement("div");
userMsg.textContent = "You: " + input.value;

userMsg.style.margin = "10px 0";

chatBoard.appendChild(userMsg);


// Fake AI reply
const aiMsg = document.createElement("div");
aiMsg.textContent = "AI: I'm Zentrix AI. Soon I will answer like ChatGPT.";

aiMsg.style.margin = "10px 0";
aiMsg.style.opacity = "0.8";

chatBoard.appendChild(aiMsg);

input.value = "";

chatBoard.scrollTop = chatBoard.scrollHeight;

}


// RENAME CHAT
function renameChat(){

const name = prompt("Enter new chat name");

if(name){
document.querySelector(".chat-header span").innerText = name;
}

}


// SWITCH TOOL
function switchTool(tool){

alert(tool + " section coming soon");

                   }
