
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


window.addEventListener("load", () => {
    const scrollRevealOption = {
        distance: "50px",
        origin: "top",
        duration: 1000
    }
    // banner
    ScrollReveal().reveal('.banner .details', { ...scrollRevealOption });
    ScrollReveal().reveal('.banner .image img ', { ...scrollRevealOption, origin: "bottom", delay: 1000 });
    // about 
    ScrollReveal().reveal('.about__image  ', { ...scrollRevealOption, origin: "left" });
    ScrollReveal().reveal('.about__image .small__img  ', { ...scrollRevealOption, origin: "bottom", delay: 500 });
    ScrollReveal().reveal('.about__info ', { ...scrollRevealOption, origin: "top" });
    ScrollReveal().reveal('.about__icons .one  ', { ...scrollRevealOption, origin: "right" });
    ScrollReveal().reveal('.about__icons .two', { ...scrollRevealOption, origin: "right", delay: 400 });
    ScrollReveal().reveal('.about__icons .three', { ...scrollRevealOption, origin: "right", delay: 800 });
    ScrollReveal().reveal('.about__icons .four', { ...scrollRevealOption, origin: "right", delay: 1200 });
    // main title 
    ScrollReveal().reveal('.main__title', { ...scrollRevealOption, origin: "bottom" });
    // services 
    ScrollReveal().reveal('.services__body .ones ', { ...scrollRevealOption, origin: "left", delay: 300 });
    ScrollReveal().reveal('.services__body .twos', { ...scrollRevealOption, origin: "left", delay: 600 });
    ScrollReveal().reveal('.services__body .threes', { ...scrollRevealOption, origin: "left", delay: 900 });
    // featured
    ScrollReveal().reveal('.featured__body .feature', { ...scrollRevealOption, origin: "right", interval: 500 });
    // amititues
    ScrollReveal().reveal('.aminities__body .aminities ', { ...scrollRevealOption, origin: "bottom", interval: 500 });
    // blog
    ScrollReveal().reveal('.blogs__body .blog', { ...scrollRevealOption, origin: "right", interval: 500 });
    // explore
    ScrollReveal().reveal('.explore', { ...scrollRevealOption, origin: "bottom", interval: 1000 });
    // footer
    ScrollReveal().reveal('.footer .feats  ', { ...scrollRevealOption, origin: "bottom", interval: 500, delay: 1000 });
})
