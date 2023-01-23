window.onscroll = () => {
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
        document.querySelector("#mob-nav").style.display = "none"
    }else{
        document.querySelector("#mob-nav").style.display = "block"
    }
}
