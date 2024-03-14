const navbarEl = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(bottomContainer.offsetTop)
window.addEventListener("scroll",()=>{
    if(scrollY> bottomContainer.offsetTop-navbarEl.offsetHeight-40){
        navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active")
    }
})