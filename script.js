var burger = document.querySelector(".burger")
var close = document.querySelector(".close")
var nav = document.querySelector(".nav-mobile")

burger.addEventListener("click", toggleNav);
close.addEventListener("click", toggleNav);

nav.classList.contains("showNav");

function toggleNav() {
    if (nav.classList.contains("showNav")) {
        nav.classList.remove("showNav");
        close.style.display = "none";
        burger.style.display = "block";
    } else {
        nav.classList.add("showNav");
        close.style.display = "block";
        burger.style.display = "none";
    }
}