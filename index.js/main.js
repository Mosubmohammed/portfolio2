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
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
 
    },
  });

// /*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// /*=============== EMAIL JS ===============*/

const contactForm =document.getElementById('contact-form')
,contactName =document.getElementById('contact-name')
,contactEmail =document.getElementById('contact-email')
,contactProject =document.getElementById('contact-project')
,contactMessage =document.getElementById('contact-message')

const sendEmail = (e)=>{
  e.preventDefault();

  // !check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
// !Add and remove color
contactMessage.classList.remove('color-blue');
contactMessage.classList.add('color-red');

// !show a message

contactMessage.textContent="write all the input fields 📩"
  }else{
    // !serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_0888aco','template_2vo4fnh','#contact-form','pqEBhP050_ujikO4r')

    .then(()=>{
// !Show message and add color
contactMessage.classList.add('color-blue')
contactMessage.textContent='Message sent ✅'

// !Remove message after five seconds

setTimeout(()=>{
  contactMessage.textContent=''
},5000)
    }, (erro)=>{
      alert('OOPS! SOMETHING HAS FAILED...', error)
    })
// !To clear the input field

contactName.value=''
contactEmail.value=''
contactProject.value=''
  }
}
  contactForm.addEventListener('submit',sendEmail)

// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY=window.pageY0ffset

  sections.forEach(current =>{
    const sectionHeight=current.offsetHeight,
    sectionTop=current.offsetTop - 58,
    sectionId=current.getAttribute('id'),
    sectionsClass=document.querySelector('.nav__menu a[href*='+sectionId+']')


    if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)

// /*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=() =>{
  const scrollUp =document.getElementById('scroll-up')
  // ! when the scroll is higher than 350 viewport height,add the show-scroll class the a tag with the scrollup

  this.scrollY>=350 ?scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
// /*=============== DARK LIGHT THEME ===============*/ 


// /*=============== CHANGE BACKGROUND HEADER ===============*/


// /*=============== SCROLL REVEAL ANIMATION