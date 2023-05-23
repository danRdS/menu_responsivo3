const hamburguer = document.querySelector('.hamburguer');
hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
})

const menu = document.querySelector('.menu');
const div_menu = document.querySelector('.div_menu')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('clicked');
    div_menu.classList.toggle('show');    
})

menu.addEventListener('blur', ()=>{
    menu.classList.remove('clicked');
    div_menu.classList.remove('show');
})