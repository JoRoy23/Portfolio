/* ============================================================
                    NAVIGATION BAR
=============================================================== */
const hamburgerIcon = document.querySelector(".hamburgerMenu");
const showNavBar = document.querySelector(".navBar");
const navLinks = document.querySelectorAll(".navItem");
const body = document.querySelector("body");

/* Open/close navigation bar when clicking on the hamburger icon */
hamburgerIcon.addEventListener("click", openCloseNavBar);

function openCloseNavBar() {
  showNavBar.classList.toggle("viewNavBar");
  body.classList.toggle("viewNavBar");
}

/* Switch icon when clicking on the hamburger menu*/
hamburgerIcon.addEventListener("click", switchIcon);

function switchIcon() {
  hamburgerIcon.classList.toggle("navBarOpen");
}

/* When clicking outside the window or on an element inside of it
that is different then the hamburger icon */
window.addEventListener("click", function (event) {
  if (event.target !== showNavBar && event.target !== hamburgerIcon) {
    showNavBar.classList.remove("viewNavBar");
    hamburgerIcon.classList.remove("navBarOpen");
    body.classList.remove("viewNavBar");
  }
});

/* Sticky header when we scroll back */
let previousScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  if (previousScrollPos > currentScrollPos) {
    let header = (document.querySelector("header").style.top = "0");
  } else {
    if (previousScrollPos > "100") {
      let header = (document.querySelector("header").style.top = "-200px");
    }
  }
  previousScrollPos = currentScrollPos;
});

/* Header shadow/color for the navigation bar */
window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  let header = document.querySelector("header");
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
$(".navItem a").on("click", smoothScroll);
$(".getInTouch").on("click", smoothScroll);

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
  ".logoLoader",
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
  ".logo",
  {
    duration: 0.7,
    opacity: 0,
  },
  "+=1"
);

/* Animation for the hamburger menu */
tl.from(
  ".hamburgerMiddleBar",
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
  ".smallText",
  {
    duration: 0.5,
    opacity: 0,
    y: 10,
  },
  "-=0.1"
);
tl.from(
  ".homeHeader",
  {
    duration: 0.5,
    opacity: 0,
    y: 10,
  },
  "-=0.4"
);
tl.from(
  ".homeHeader span",
  {
    duration: 0.5,
    opacity: 0,
    y: 10,
  },
  "-=0.4"
);
tl.from(
  ".homePresentation",
  {
    duration: 0.5,
    opacity: 0,
    y: 10,
  },
  "-=0.4"
);
tl.from(".getInTouch", { duration: 0.5, opacity: 0, y: 10 }, "-=0.4");

/* Animation for the footer */
tl.from(".socialIconsBar", { duration: 1, opacity: 0 }, "+=0.1");
tl.from(".emailBarContainer", { duration: 1, opacity: 0 }, "-=1");

/* ============================================================
                       FADE IN ANIMATION
=============================================================== */
/*  Intersection observer for the fade in animation on each title and container */
const faders = document.querySelectorAll(".fadeIn");
const sliders = document.querySelectorAll(".slideIn");

const appearOptions = {
  root: null,
  threshold: 0.6,
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

/* ============================================================
                       HEXAGON LOGO       
=============================================================== */
/* Pixel length for the path of the hexagonal logo */
const logo = document.querySelectorAll(".logoLoader path");

for (let j = 0; j < logo.length; j++) {
  console.log(logo[j].getTotalLength());
}
