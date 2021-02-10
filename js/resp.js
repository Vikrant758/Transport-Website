burger = document.querySelector('.burger')
rightNav = document.querySelector('.rightNav')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list ')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-responsive');
    navbar.classList.toggle('h-nav-responsive');
    navlist.classList.toggle('v-class-responsive');
})

















