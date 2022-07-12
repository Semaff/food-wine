document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");
    const burger = document.getElementById("burger");

    // Fixed Header
    let windowHeight = window.innerHeight;
    let navHeight = nav.offsetHeight;

    document.addEventListener("scroll", (e) => {
        if(window.scrollY > windowHeight) {
            nav.classList.add("fixed");
            header.style.paddingBottom = navHeight + "px";
        } else {
            nav.classList.remove("fixed");
            header.style.paddingBottom = 0;
        }
    })
    

    // Burger
    burger.addEventListener("click", (e) => {
        e.preventDefault();
        nav.classList.toggle("active");
        burger.classList.toggle("active");
    })


    // What page we're on
    const url = document.URL.split("/").pop().split(".")[0];

    switch(url){
        case "":
        case "index":
            // nav.querySelector(".current").classList.remove("current");
            nav.querySelector("#home").classList.add("current");
            break;
        case "wine-list":
            nav.querySelector("#wine").classList.add("current");
            break;
        case "menu":
            nav.querySelector("#menu").classList.add("current");
            break;
        case "specials":
            nav.querySelector("#specials").classList.add("current");
            break;
        case "gallery":
            nav.querySelector("#gallery").classList.add("current");
            break;
        case "blog":
            nav.querySelector("#blog").classList.add("current");
            break;
        case "contacts":
            nav.querySelector("#contacts").classList.add("current");
            break;
        default:
            nav.querySelector("#pages").classList.add("current");
            break;
    }
    
})