//! ---------- CAROUSEL ---------- !//
const carouselSetup = () => {
  //* Set needed variables
  const track = document.querySelector(".carousel__track");
  if (track == null) {
    return;
  } else {
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
    if (document.querySelector(".carousel").classList.contains("autoplay")) {
      carouselAutoplay();
    }

    function doSetTimeout(i) {
      setTimeout(function () {
        if (i === dots.length) {
          carouselAutoplay();
        }
        dots[i].click();
      }, 5000 * i);
    }
  }
};
carouselSetup();

//** Removes the reversed class to every slide on mobile devices **/
const toRemove = document.querySelectorAll(".carousel__slide.reversed");
if (window.innerWidth < 650) {
  toRemove.forEach((e) => {
    e.classList.remove("reversed");
  });
}

//! ---------- NAVBAR ---------- !//

//* Changes the navbar bg on scroll
window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    document.querySelector("header").style.backgroundColor = "var(--primary)";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
  }
});
364;

//! ---------- SCROll ARROWS ---------- !//

//* Turns arrows 180deg once you've reached the bottom of the screen
window.onscroll = function (ev) {
  if (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight - 50
  ) {
    document.querySelector(".overflay svg").style.transform = "rotateZ(180deg)";
  } else if (
    window.innerHeight + Math.round(window.scrollY) <= window.innerHeight &&
    document.querySelector(".carousel") == null
  ) {
    document.querySelector(".overflay svg").style.transform =
      "translateX(-48vw) scale(0.5)";
  } else if (
    window.innerHeight + Math.round(window.scrollY) <=
    window.innerHeight
  ) {
    document.querySelector(".overflay svg").style.transform = "rotateZ(0deg)";
  } else if (
    window.innerHeight + Math.round(window.scrollY) >
    window.innerHeight + 50
  ) {
    document.querySelector(".overflay svg").style.transform =
      "translateX(-48vw) scale(0.5)";
  } else if (
    window.innerHeight + Math.round(window.scrollY) >= window.innerHeight &&
    document.querySelector(".carousel") == null
  ) {
    document.querySelector(".overflay svg").style.transform =
      "translateX(-48vw) scale(0.5)";
  }
};

window.onload = function (ev) {
  if (
    window.innerHeight + Math.round(window.scrollY) >= window.innerHeight &&
    document.querySelector(".carousel") == null
  ) {
    document.querySelector(".overflay svg").style.transform =
      "translateX(-48vw) scale(0.5)";
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

//! ---------- REDIRECTION TO QUICKSTART PAGE AFTER DOWNLOAD OF LIBRARY ---------- !//

const DLBtns = document.querySelectorAll("a[download]");
DLBtns.forEach((e) => {
  e.addEventListener("click", () => {
    if (window.location.href.includes("/pages/")) {
      location.href = "quickStart.html";
    } else {
      location.href = "pages/quickStart.html";
    }
  });
});

//! ---------- DYNAMICALLY ADD BLOG POSTS TO THE NEWS PAGE ---------- !//

const blogContainer = document.querySelector(".blogPostCollection");
if (blogContainer !== null) {
  blogData.forEach((e) => {
    blogContainer.innerHTML += `<div class='blogPost'><img src='${e.img}' alt='Thumbnail'><details><summary><p>${e.title}</p>${e.summary}<div class='tags'>${e.tags} ${e.date}</div></summary>${e.content}</details></div>`;
  });
}

//! ---------- RESPONSIVE MENU TOGGLE ---------- !//

//* Set needed variables
const menuToggle = document.querySelector(".navbarToggle");
const toggleSvgs = document.querySelectorAll(".navbarToggleSVG");
const navbar = document.querySelectorAll(".navbar")[0];

//* Detects click on menuToggle and changes the displayed SVG and saves in local storage the theme preference
menuToggle.addEventListener("click", () => {
  toggleSvgs.forEach((e) => {
    console.log(e);
    e.classList.toggle("toggle");
  });
  if (toggleSvgs[0].classList.contains("toggle")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
});

//* Prevents the keyframe on page load
setTimeout(function () {
  document.body.classList.remove("preload");
}, 500);
