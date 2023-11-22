'use strict';
// ====================================================================


// SEARCH
const searchButton = document.getElementById('search-button'),
searchClose = document.getElementById('search-close'),
searchContent = document.getElementById('search-content')

// MENU SHOW
/* Validate if constant exists */
if(searchButton){
searchButton.addEventListener('click', () =>{
searchContent.classList.add('show-search')
})
}
// MENU HIDDEN
        
/* Validate if constant exists */
if(searchClose){
searchClose.addEventListener('click', () =>{
searchContent.classList.remove('show-search')
})
}

// ========= footer side page bar ========

// let link = document.getElementsByClassName("link");

// let currentValue = 1;

// function activeLink(){
//   for(l of link){
//     l.classList.remove("activate");
//   }
//   event.target.classList.add("activate");
//   currentValue = event.target.value;
// }

// function backBtn(){
//   if(currentValue > 1){
//     for(l of link){
//       l.classList.remove("activate");
//     }
//     currentValue--;
//     link[currentValue-1].classList.add("activate")
//   }
// }

// function nextBtn(){
//   if(currentValue < 5){
//     for(l of link){
//       l.classList.remove("activate");
//     }
//     currentValue--;
//     link[currentValue+1].classList.add("activate")
//   }
// }


// ========== End of footer side page bar=====


// ====================================================================
/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});