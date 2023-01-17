const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close");

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", closeMenu);

function toggleMenu() {
    document.querySelector("#mob-nav").style.display = "block";
}
function closeMenu() {
    document.querySelector("#mob-nav").style.display = "none";
}