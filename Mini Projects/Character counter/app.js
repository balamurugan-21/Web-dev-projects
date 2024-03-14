const textEl = document.querySelector(".textarea");

const totalChar = document.getElementById("totalchar");
const remChar = document.getElementById("remchar");


textEl.addEventListener("keydown",()=>{
    updateCounter();
})

updateCounter();

function updateCounter(){

    totalChar.innerText = textEl.value.length;
    remChar.innerText = textEl.getAttribute("maxLength") -  textEl.value.length;

}