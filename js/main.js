
const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");
const link = document.querySelectorAll(".link");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("orange"); 
    links.classList.toggle("active");
    link.forEach(link => {
        link.addEventListener("click",() => {
            links.classList.remove("active"); 
            toggle.classList.remove("orange"); 
        })
    })
})
window.addEventListener("scroll", () => {
    links.classList.remove("active");
    toggle.classList.remove("orange"); 
    cartBody.classList.remove("show__cart"); 
    cartBtn.classList.remove("orange") 
});

const cartBody = document.getElementById("cart");
const cartBtn = document.getElementById("cart__btn");

cartBtn.addEventListener("click", () => {
    cartBody.classList.toggle("show__cart"); 
    cartBtn.classList.toggle("orange") 
    links.classList.remove("active");
    toggle.classList.remove("orange"); 
})


