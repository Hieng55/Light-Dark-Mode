const rond = document.querySelector(".rond");
const check = document.querySelector(".fa-check");
const close = document.querySelector(".fa-xmark");
const bg = document.querySelector(".container");
const box = document.querySelector(".box");
const text = document.querySelector("h1");
function btn() {
    if (rond.classList.contains("active")) {
        rond.classList.remove("active");
        check.classList.remove("active");
        close.classList.remove("active");
        bg.classList.remove("active");
        box.classList.remove("active");
        text.innerText = "LIGHT MODE";
        text.classList.remove("active");
    } else {
        rond.classList.add("active");
        check.classList.add("active");
        close.classList.add("active");
        bg.classList.add("active");
        box.classList.add("active");
        text.innerText = "DARK MODE";
        text.classList.add("active");
    }
}
