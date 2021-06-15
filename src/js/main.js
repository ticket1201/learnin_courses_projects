// Menu click action

var menuEl = document.querySelector('.menu__items');
var btnEl = document.querySelector('.menu__wrapper');

function toggleMenu() {
    menuEl.classList.toggle('open');
}

btnEl.addEventListener('click', toggleMenu);

// Scroll to top btn action

var toTopBtn = document.querySelector(".toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.classList.add("block");
  }
  else{
    toTopBtn.classList.remove("block");
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}

toTopBtn.addEventListener('click', topFunction);