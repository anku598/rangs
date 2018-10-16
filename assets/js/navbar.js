var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");
var logo = document.getElementById("small-img");
var subNav = document.querySelectorAll(".nav-scroller");
var navBar = document.querySelectorAll(".navbar");
console.log(logo)
console.log(subNav);

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;
  
  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("slideDown");
    header.classList.add("slideup");
    logo.classList.add("scroll-logo");
    navBar.style.background = 'none';
    header.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))';
    subNav.style["top"] = '10px';
  
    
    // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("slideup");
    header.classList.add("slideDown");
    logo.classList.remove("scroll-logo");

    navBar.style.background = 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))';
    header.style.background = 'none';
    

  }
  
  new_scroll_position = last_scroll_position;
});


/** Burger Menu  */

var menuToggle = document.getElementById("menu-toggle");
var navBar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function(event) {
  
  navBar.classList.toggle('toggle-menu');
  event.preventDefault;
 
})