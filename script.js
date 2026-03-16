// ================= SIDEBAR + OVERLAY =================
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");

// Create overlay if it doesn't exist
if(!overlay){
    overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.4)";
    overlay.style.display = "none";
    overlay.style.zIndex = "1050";
    document.body.appendChild(overlay);
}

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("showSidebar");
        overlay.style.display = sidebar.classList.contains("showSidebar") ? "block" : "none";
    });
}

overlay.addEventListener("click", () => {
    sidebar.classList.remove("showSidebar");
    overlay.style.display = "none";
});

// ================= THREE DOT MENU =================
const threeDotBtn = document.getElementById("threeDotBtn");
const chatMenu = document.getElementById("threeDotMenu");

if(threeDotBtn){
    threeDotBtn.addEventListener("click",(e)=>{
        e.stopPropagation(); // prevent closing immediately
        chatMenu.style.display = chatMenu.style.display === "flex" ? "none" : "flex";
    });
}

// ================= PLUS MENU =================
const plusBtn = document.getElementById("plusBtn");
const plusMenu = document.getElementById("plusMenu");

if(plusBtn){
    plusBtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        plusMenu.style.display = plusMenu.style.display === "flex" ? "none" : "flex";
    });
}

// ================= CLICK OUTSIDE TO CLOSE MENUS =================
document.addEventListener("click", ()=>{
    if(chatMenu) chatMenu.style.display = "none";
    if(plusMenu) plusMenu.style.display = "none";
});

// ================= THEME TOGGLE =================
function toggleTheme(){
    const body = document.body;
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
}

// ================= NEW CHAT =================
function newChat(){
    const chatBoard = document.getElementById("chatBoard");
    chatBoard.innerHTML = "";
}

// ================= RENAME CHAT =================
function renameChat(){
    const name = prompt("Enter new chat name");
    if(name) document.querySelector(".chat-header span").innerText = name;
}

// ================= SWITCH TOOL =================
function switchTool(tool){
    alert(tool + " section coming soon");
}

// ================= SAFE AI CHAT =================
async function sendMessage(){
    const input = document.getElementById("userInput");
    const chatBoard = document.getElementById("chatBoard");
    const userText = input.value.trim();
    if(userText === "") return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + userText;
    userMsg.style.margin = "10px 0";
    chatBoard.appendChild(userMsg);

    input.value = "";

    // AI message placeholder
    const aiMsg = document.createElement("div");
    aiMsg.textContent = "AI is thinking...";
    aiMsg.style.margin = "10px 0";
    aiMsg.style.opacity = "0.8";
    chatBoard.appendChild(aiMsg);

    // ================ CALL SERVERLESS FUNCTION ================
    try{
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userText })
        });

        const data = await response.json();

        if(data[0]?.generated_text){
            aiMsg.textContent = "AI: " + data[0].generated_text;
        } else {
            aiMsg.textContent = "AI: Could not generate response";
        }

    }catch(err){
        aiMsg.textContent = "AI: Error connecting to server";
        console.error(err);
    }

    chatBoard.scrollTop = chatBoard.scrollHeight;
            }
