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

window.onscroll = () => {
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
        document.querySelector("#mob-nav").style.display = "none"
    }else{
        document.querySelector("#mob-nav").style.display = "block"
    }
}