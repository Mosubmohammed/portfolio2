// /*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu')
const navToggle=document.getElementById('nav-toggle')
const navClose=document.getElementById('nav-close')

// MENU SHOW
// VALIDATE IF CONSTANT EXISTS
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// VALIDATE IF CONSTANT EXISTS
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}
// /*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')
const linkAction=() =>{
const navMenu=document.getElementById('nav-menu')
// when we click on each nav__link we remove the show-menu
navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))


// /*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

// /*=============== SWIPER TESTIMONIAL ===============*/


// /*=============== EMAIL JS ===============*/


// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


// /*=============== SHOW SCROLL UP ===============*/ 


// /*=============== DARK LIGHT THEME ===============*/ 


// /*=============== CHANGE BACKGROUND HEADER ===============*/


// /*=============== SCROLL REVEAL ANIMATION ===============*/

