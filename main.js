const nav = document.querySelector("#nav");
const openNav = document.querySelector("#open");
const overlay = document.querySelector("#overlay");
const options = document.querySelectorAll(".options");

openNav.addEventListener("click", (event) => {
    event.preventDefault();
    nav.classList.toggle("visible");
    overlay.classList.toggle("visible");
})

document.addEventListener("click", (event) => {
    const insideMenu = nav.contains(event.target);
    const clickOpenNav = openNav.contains(event.target);
    
    if (!insideMenu && !clickOpenNav) {
        nav.classList.remove("visible");
        overlay.classList.remove("visible");
    }
});

options.forEach(option => {
    option.addEventListener("click", () => {
            nav.classList.remove("visible");
            overlay.classList.remove("visible");
    });
});