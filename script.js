// SIDEBAR TOGGLE
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if(menuToggle){
menuToggle.addEventListener("click", () => {
sidebar.classList.toggle("showSidebar");
});
}


// THREE DOT MENU
const threeDotBtn = document.getElementById("threeDotBtn");
const threeDotMenu = document.getElementById("threeDotMenu");

if(threeDotBtn){
threeDotBtn.addEventListener("click", () => {
threeDotMenu.classList.toggle("showMenu");
});
}


// PLUS TOOLS MENU
const plusBtn = document.getElementById("plusBtn");
const plusMenu = document.getElementById("plusMenu");

if(plusBtn){
plusBtn.addEventListener("click", () => {
plusMenu.classList.toggle("showTools");
});
}


// CLICK OUTSIDE CLOSE MENUS
document.addEventListener("click",(e)=>{

if(threeDotBtn && !threeDotBtn.contains(e.target) && !threeDotMenu.contains(e.target)){
threeDotMenu.classList.remove("showMenu");
}

if(plusBtn && !plusBtn.contains(e.target) && !plusMenu.contains(e.target)){
plusMenu.classList.remove("showTools");
}

});
