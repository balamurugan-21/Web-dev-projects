const loginBtn = document.querySelector(".btn");
const container = document.querySelector(".container")

const popupContainer = document.querySelector(".popup-container");
const closeIcon = document.querySelector(".close-icon")

loginBtn.addEventListener("click" , ()=>{
    container.classList.add("active");
    popupContainer.classList.remove("active")
})

closeIcon.addEventListener("click",()=>{
    popupContainer.classList.add("active");
    container.classList.remove("active");
})