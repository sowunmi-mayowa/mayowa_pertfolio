const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close");

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", closeMenu);

function toggleMenu() {
    document.querySelector("#tab-nav").style.display = "block";
}
function closeMenu() {
    document.querySelector("#tab-nav").style.display = "none";
}

if(window.screen.width <= "425"){
    alert("working");
    
}