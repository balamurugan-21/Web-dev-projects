const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const closeBtn = document.querySelector('.icon-close');

const loginBtn = document.querySelector('.login_btn');
const headerLogin = document.querySelector('.login-btn')
const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.dropdown-menu');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

headerLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

loginBtn.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

closeBtn.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})

toggleBtn.onclick = function(){
    menu.classList.toggle('open')
}

loginBtn.addEventListener('click',()=>{
    menu.classList.toggle('open');
    wrapper.classList.add('active-popup');
})