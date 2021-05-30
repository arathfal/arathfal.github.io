const space = () => {
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame;
  })();
  var canvas = document.getElementById("space");
  var c = canvas.getContext("2d");

  var numStars = 1900;
  var radius = "0." + Math.floor(Math.random() * 9) + 1;
  var focalLength = canvas.width * 2;
  var warp = 0;
  var centerX, centerY;

  var stars = [],
    star;
  var i;

  var animate = true;

  initializeStars();

  function executeFrame() {
    if (animate) requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
  }

  function initializeStars() {
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    stars = [];
    for (i = 0; i < numStars; i++) {
      star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        o: "0." + Math.floor(Math.random() * 99) + 1,
      };
      stars.push(star);
    }
  }

  function moveStars() {
    for (i = 0; i < numStars; i++) {
      star = stars[i];
      star.z--;

      if (star.z <= 0) {
        star.z = canvas.width;
      }
    }
  }

  function drawStars() {
    var pixelX, pixelY, pixelRadius;

    // Resize to the screen
    if (
      canvas.width != window.innerWidth ||
      canvas.width != window.innerWidth
    ) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
    }
    if (warp == 0) {
      c.fillStyle = "rgba(0,10,20,1)";
      c.fillRect(0, 0, canvas.width, canvas.height);
    }
    c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
    for (i = 0; i < numStars; i++) {
      star = stars[i];

      pixelX = (star.x - centerX) * (focalLength / star.z);
      pixelX += centerX;
      pixelY = (star.y - centerY) * (focalLength / star.z);
      pixelY += centerY;
      pixelRadius = 1 * (focalLength / star.z);

      c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
      c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
      //c.fill();
    }
  }

  executeFrame();
};
const handleNavbar = () => {
  const toggler = document.querySelector(".navbar-toggle"),
    icons = document.querySelector(".navbar-toggle .fa-bars");
  navbar = document.querySelector("nav");
  navList = document.querySelector(".navbar-list");

  navList.classList.add("hide");

  toggler.addEventListener("click", (e) => {
    e.preventDefault();
    navList.classList.toggle("show");
    icons.classList.toggle("fa-times");
  });

  window.onscroll = () => {
    navbar.classList.remove("shadow");

    navbar.offsetTop === 0
      ? navbar.classList.remove("shadow")
      : navbar.classList.add("shadow");
  };
};

const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll(".navbar-link");

  for (let nav in navLinks) {
    if (navLinks.hasOwnProperty(nav)) {
      navLinks[nav].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[nav].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};

const spyScrolling = () => {
  const sections = document.querySelectorAll(".scrollspy");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let secs in sections)
      if (
        sections.hasOwnProperty(secs) &&
        sections[secs].offsetTop <= scrollPos
      ) {
        const id = sections[secs].id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href*=${id}]`)
          .parentNode.classList.add("active");
      }
  };
};

makeNavLinksSmooth();
spyScrolling();
space();
handleNavbar();
