const navButton = document.querySelector('.dropbtn')
const navList = document.querySelector('.dropdown-content')

addNav(navButton, navList)

function addNav(navButton, navList) {
  navButton.addEventListener('click', () =>{
    if (navList.style.display === 'block'){
      navList.style.display = 'none'      
    } else {
    navList.style.display = 'block'
   }
  })
}




//function myFunction() {
//    document.getElementById("myDropdown").classList.toggle("show");
//}
//
// Close the dropdown if the user clicks outside of it
//window.onclick = function(event) {
// if (!event.target.matches('.dropbtn')) {
//
//    var dropdowns = document.getElementsByClassName("dropdown-content");
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
// }

const modalButton = document.querySelector('#skills-button')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close')

addModal(modalButton, modal, closeButton)

  function addModal(button, modal, closeButton) {
  button.addEventListener('click', () =>{
    modal.style.display = 'block'
  })
  closeButton.addEventListener('click', () =>{
    modal.style.display = 'none'
  })
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  })
}




const slides = document.querySelectorAll('.mySlides')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

addSlideshow(slides, prev, next) 

let slideIndex
function addSlideshow(slides, prev, next, slideIndex) {
  slideIndex = 1;
  showSlides(slideIndex, slides)
  prev.addEventListener('click', () => {
    plusSlides((-1), slides)
  })
  next.addEventListener('click', () => {
    plusSlides(1, slides)
  })
}

function showSlides(n, slides){
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndex-1].style.display = "block"
}

function plusSlides(n, slides) {
  showSlides(slideIndex += n, slides)
}

module.exports = {
  addNav,
  addModal,
  addSlideshow
}
