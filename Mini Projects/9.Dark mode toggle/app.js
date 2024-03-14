const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body")

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
toggle();

function toggle(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input",()=>{
    toggle();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}