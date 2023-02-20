// Hamburger Menu Functionality -- used Free Code Camp as a resource //

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )


// Photo Carousel Functionality -- used Free Code Camp as a resource  //

  let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(pic1) {
  showSlides(slideIndex += pic1);
}


function currentSlide(pic2) {
  showSlides(slideIndex = pic2);
}

function showSlides(slide) {
  let i;
  let slides = document.getElementsByClassName("picSlides");
  let dots = document.getElementsByClassName("dots");
  if (slide > slides.length) {slideIndex = 1}
  if (slide < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Modal for Projects Page //
