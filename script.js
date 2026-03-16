// SIDEBAR TOGGLE

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {

if(sidebar.classList.contains("hideSidebar")){
sidebar.classList.remove("hideSidebar");
sidebar.classList.add("showSidebar");
}else{
sidebar.classList.add("hideSidebar");
}

});


// THREE DOT MENU

const threeDotBtn = document.getElementById("threeDotBtn");
const threeDotMenu = document.getElementById("threeDotMenu");

threeDotBtn.addEventListener("click", () => {
threeDotMenu.classList.toggle("showMenu");
});


// PLUS MENU

const plusBtn = document.getElementById("plusBtn");
const plusMenu = document.getElementById("plusMenu");

plusBtn.addEventListener("click", () => {
plusMenu.classList.toggle("showTools");
});


// CLOSE MENUS OUTSIDE CLICK

document.addEventListener("click",(e)=>{

if(!threeDotBtn.contains(e.target) && !threeDotMenu.contains(e.target)){
threeDotMenu.classList.remove("showMenu");
}

if(!plusBtn.contains(e.target) && !plusMenu.contains(e.target)){
plusMenu.classList.remove("showTools");
}

});


// THEME TOGGLE

function toggleTheme(){

if(document.body.classList.contains("dark-theme")){
document.body.classList.remove("dark-theme");
document.body.classList.add("light-theme");
}else{
document.body.classList.remove("light-theme");
document.body.classList.add("dark-theme");
}

  }
