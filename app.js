const humburger = document.querySelector("#humburger");
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

humburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    humburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        humburger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click",()=>{
   body.classList.toggle("dark")
    
})
