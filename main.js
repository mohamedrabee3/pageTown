let section=document.querySelectorAll("section");
let navLink=document.querySelectorAll("nav a");
window.addEventListener("scroll",()=>{
    let nav=document.querySelector("nav");
    nav.classList.toggle("shadow",window.scrollY > 0);

})
