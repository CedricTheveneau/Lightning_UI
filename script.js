//! ---------- CAROUSEL ---------- !//

//* Set needed variables
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".carousel__nav");

//* Pushes as much navdots as there are slides in the carousel, for a better reusability
for (let i = 0; i < slides.length; i++) {
  dotsNav.innerHTML += '<button class="carousel__indicator"></button>';
}
const dots = Array.from(dotsNav.children);
dots[0].classList.add("current-slide");
const slideWidth = slides[0].getBoundingClientRect().width;

//* Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//* Move slide
const moveToSlide = (currentSlide, targetSlide, targetDot, targetIndex) => {
  const currentDot = dotsNav.querySelector(".current-slide");
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");

  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

//* When I click the nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(currentSlide, targetSlide, targetDot, targetIndex);
});

//* Carousel autoplay
const carouselAutoplay = () => {
  for (let i = 0; i <= dots.length; i++) {
    doSetTimeout(i);
  }
};
carouselAutoplay();

function doSetTimeout(i) {
  setTimeout(function () {
    if (i === dots.length) {
      carouselAutoplay();
    }
    dots[i].click();
  }, 5000 * i);
}

//! ---------- NAVBAR ---------- !//

//* Changes the navbar bg on scroll
window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    document.querySelector("nav").style.backgroundColor = "var(--secondary10)";
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
});
364;

window.onscroll = function (ev) {
  if (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight
  ) {
    document.querySelector(".overflay svg").style.transform = "rotateZ(180deg)";
  } else if (
    window.innerHeight + Math.round(window.scrollY) <=
    document.body.offsetHeight / 2
  ) {
    document.querySelector(".overflay svg").style.transform = "rotateZ(0deg)";
  }
};

//! ---------- DARK/LIGHT MODE ---------- !//

//* Set needed variables
const button = document.querySelector(".darkModeToggle");
const svgs = document.querySelectorAll(".darkModeToggleSVG");
const body = document.getElementsByTagName("body")[0];

//* Detects click on button and changes the displayed SVG and saves in local storage the theme preference
button.addEventListener("click", () => {
  svgs.forEach((e) => {
    e.classList.toggle("toggle");
  });
  if (svgs[1].classList.contains("toggle")) {
    localStorage.setItem("LightningUI-Theme", "Light");
    body.classList.remove("dark");
  } else {
    localStorage.setItem("LightningUI-Theme", "Dark");
    body.classList.add("dark");
  }
});

//* Fetches if a prefered theme is defined in local storage, if yes, uses it
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const preferedTheme = localStorage.getItem("LightningUI-Theme");
    if (preferedTheme == null || preferedTheme == "Light") {
      return;
    } else if (preferedTheme == "Dark") {
      button.click();
      body.classList.add("dark");
    }
  },
  false
);
