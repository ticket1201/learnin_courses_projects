// Menu click action

var menuEl = document.querySelector('.menu__items');
var btnEl = document.querySelector('.menu__wrapper');

function toggleMenu() {
    menuEl.classList.toggle('open');
}

btnEl.addEventListener('click', toggleMenu);

// Scroll to top btn action

const select = document.querySelector("main");
const toTopBtn = document.querySelector(".scrollBtn");

const objOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
sectionObserver.observe(select);

function callBackFunction(entries) {
  const [entry] = entries;
  //console.log(entry);
  if (entry.isIntersecting) {
    toTopBtn.classList.remove("block");
  } else {
    toTopBtn.classList.add("block");
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}

toTopBtn.addEventListener('click', topFunction);