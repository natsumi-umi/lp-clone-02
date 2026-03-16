const hamburger = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-nav");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("active");
    if(nav.classList.contains("open")) {
        main.style.transform = "translateY(50px)";
    } else {
        main.style.transform = "translateY(0)";
    }
});