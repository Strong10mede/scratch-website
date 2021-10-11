let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let rightnav = document.querySelector('.rightNav')
let navlist = document.querySelector('.nav-list')

window.onscroll = () =>{
    navbar.classList.remove('active');
    rightnav.classList.remove('fa-times');
    navlist.classList.remove('fa-times');
}

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})

