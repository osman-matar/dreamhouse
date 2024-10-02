
const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");
const link = document.querySelectorAll(".link");

toggle.addEventListener("click", () => {
    links.classList.toggle("active");
    link.forEach(link => {
        link.addEventListener("click",() => {
            links.classList.remove("active"); 
        })
    })
})
window.addEventListener("scroll", () => {
    links.classList.remove("active");
});


