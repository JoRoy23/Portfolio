/* ============================================================
                    NAVIGATION BAR
=============================================================== */
const hamburgerContainer = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger__menu");
const showNavBar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-bar__nav-item");
const body = document.querySelector(".body");
const backdrop = document.querySelector(".backdrop");
const header = document.querySelector(".header");

/* Open/close navigation bar when clicking on the hamburger icon */
hamburgerIcon.addEventListener("click", openCloseNavBar);

function openCloseNavBar() {
  showNavBar.classList.toggle("nav-bar--open");
  body.classList.toggle("body--freeze");
  backdrop.classList.toggle("backdrop--visible");
}

/* Switch icon when clicking on the hamburger menu*/
hamburgerIcon.addEventListener("click", switchIcon);

function switchIcon() {
  hamburgerContainer.classList.toggle("hamburger--nav-open");
}

/* When clicking/touching outside the window or on an element inside of it
that is different then the hamburger icon */
window.addEventListener("touchstart", closeNavBar);
window.addEventListener("click", closeNavBar);

function closeNavBar(event) {
  if (event.target !== showNavBar && event.target !== hamburgerIcon) {
    showNavBar.classList.remove("nav-bar--open");
    hamburgerContainer.classList.remove("hamburger--nav-open");
    body.classList.remove("body--freeze");
    backdrop.classList.remove("backdrop--visible");
  }
}

/* Sticky header when we scroll back */
let previousScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  if (previousScrollPos > currentScrollPos) {
    let header = (document.querySelector(".header").style.top = "0");
  } else {
    if (
      previousScrollPos > "100" &&
      body.classList[0] !== "body__nav-bar--open"
    ) {
      let header = (document.querySelector(".header").style.top = "-200px");
    }
  }
  previousScrollPos = currentScrollPos;
});

/* Header shadow/color for the navigation bar */
window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  const header = document.querySelector(".header");
  if (currentScrollPos === 0) {
    header.style.boxShadow = "none";
    header.style.height = "6rem";
  } else {
    header.style.boxShadow = " 0 15px 20px rgba(0, 0, 0, 0.2)";
    header.style.height = "4.5rem";
  }
});

/* ============================================================
                   SMOOTH SCROLLING JQUERY
=============================================================== */
/* Speed of the scrolling when we click on the contact button or on the navigation links */
$(".nav-bar__nav-item a").on("click", smoothScroll);
$(".get-in-touch").on("click", smoothScroll);

function smoothScroll(event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000
    );
  }
}

/* ============================================================
                       GSAP ANIMATION
=============================================================== */
let tl = gsap.timeline({ default: { ease: "Power2.easeOut" } });

/* Animation for the preload logo */
tl.to(
  ".preload__logo",
  {
    duration: 0.7,
    opacity: 0,
    scale: 0.2,
    ease: "Expo.easeOut",
  },
  "4"
);

/* Animation for the preload page */
tl.to(".preload", {
  duration: 0.2,
  opacity: 0,
  zIndex: -1,
});

/* Animation for the logo */
tl.from(
  ".header__logo",
  {
    duration: 0.7,
    opacity: 0,
  },
  "+=1"
);

/* Animation for the hamburger menu */
tl.from(
  ".hamburger__middle-bar",
  {
    duration: 0.7,
    opacity: 0,
  },
  "<0"
);

/* Animation for the navigation bar */
for (let i = 0; i < navLinks.length; i++) {
  tl.from(navLinks[i], { duration: 0.2, opacity: 0, y: -30 }, "-=0.1");
}

/* Animation for the home content */
tl.from(
  ".home__subtitle",
  {
    duration: 0.5,
    opacity: 0,
    y: 10,
  },
  "-=0.1"
);
tl.from(
  ".home__title",
  {
    duration: 0.5,
    opacity: 0,
    y: 10,
  },
  "-=0.4"
);
tl.from(
  ".home__title span",
  {
    duration: 0.5,
    opacity: 0,
    y: 10,
  },
  "-=0.4"
);
tl.from(
  ".home__presentation",
  {
    duration: 0.5,
    opacity: 0,
    y: 10,
  },
  "-=0.4"
);
tl.from(".get-in-touch", { duration: 0.5, opacity: 0, y: 10 }, "-=0.4");

/* Animation for the footer */
tl.from(".social-icons", { duration: 1, opacity: 0 }, "+=0.1");
tl.from(".email", { duration: 1, opacity: 0 }, "-=1");

/* ============================================================
                       FADE IN ANIMATION
=============================================================== */
/* Intersection observer for the slide in animation on the title container */
const titleContainer = document.querySelectorAll(".title-container");

const slideOptions = {
  root: null,
  threshold: 0.6,
};

const slideOnScroll = new IntersectionObserver((entries, slideOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("title__container--appear");
      slideOnScroll.unobserve(entry.target);
    }
  });
}, slideOptions);

titleContainer.forEach((title) => {
  slideOnScroll.observe(title);
});

/* Intersection observer for the fade in animation on the main container */
const mainContainer = document.querySelectorAll(".main-container");

const fadeInOptions = {
  root: null,
  threshold: 0.6,
};

const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("main-container--fade-in");
      fadeInOnScroll.unobserve(entry.target);
    }
  });
}, fadeInOptions);

mainContainer.forEach((container) => {
  fadeInOnScroll.observe(container);
});
/* ============================================================
                       HEXAGON LOGO       
=============================================================== */
/* Pixel length for the path of the hexagonal logo */
const logo = document.querySelectorAll(".preload__logo path");

for (let j = 0; j < logo.length; j++) {
  console.log(logo[j].getTotalLength());
}
