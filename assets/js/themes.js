import PROJECT_ITEMS from "./projectItem.js";

const space = () => {
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame;
  })();
  var canvas = document.getElementById('space');
  var c = canvas.getContext('2d');

  var numStars = 1900;
  var radius = '0.' + Math.floor(Math.random() * 9) + 1;
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
        o: '0.' + Math.floor(Math.random() * 99) + 1,
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
    if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
    }
    if (warp == 0) {
      c.fillStyle = 'rgba(0,10,20,1)';
      c.fillRect(0, 0, canvas.width, canvas.height);
    }
    c.fillStyle = 'rgba(209, 255, 255, ' + radius + ')';
    for (i = 0; i < numStars; i++) {
      star = stars[i];

      pixelX = (star.x - centerX) * (focalLength / star.z);
      pixelX += centerX;
      pixelY = (star.y - centerY) * (focalLength / star.z);
      pixelY += centerY;
      pixelRadius = 1 * (focalLength / star.z);

      c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
      c.fillStyle = 'rgba(209, 255, 255, ' + star.o + ')';
    }
  }

  executeFrame();
};

const handleNavbar = () => {
  const navbar = document.querySelector('nav');
  const portfolio = document.getElementById('portfolio');

  window.addEventListener('scroll', function () {
    const portfolioRect = portfolio.getBoundingClientRect();
    portfolioRect.top <= 0 ? navbar.classList.add('dark') : navbar.classList.remove('dark');
  });
};

const handleModal = () => {
  const modals = document.querySelectorAll('[data-modal]');

  modals.forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      const container = document.querySelector('.modal-container');
      const dataModal = PROJECT_ITEMS?.[trigger.dataset.project]
      const content = `
        <figure class="modal-image">
          <img src="${dataModal?.image}" alt="${dataModal?.title}" />
        </figure>
        <div class="modal-content">
          <div class="modal-scrollable-container">
            <h1 class="modal-title mb-10">${dataModal?.title}</h1>
            <h5 class="modal-subtitle mb-2">Overview:</h5>
            <p class="modal-description mb-10">${dataModal?.description}</p>

            <h5 class="modal-subtitle mb-2">Role and Contributions:</h5>
            <p class="modal-description mb-10">${dataModal?.contribution}</p>
          </div>

          <a ${!dataModal?.disabled ? `href="${dataModal?.url}"` : ''} class="modal-link ${dataModal?.disabled ? 'offline' : ''}" target="_blank">
            <button class="button-black full-width">Visit Site</button>
          </a>
        </div>
      `
      container.innerHTML = content;

      modal.classList.add('open')
      const exits = modal.querySelectorAll('.modal-exit');
        exits.forEach(function (exit) {
          exit.addEventListener('click', function (event) {
            event.preventDefault();
            modal.classList.remove('open');
          });
        });
    });
  });
}

const handleProject = () => {
  const container = document.getElementById('portfolioContainer');
  const content = PROJECT_ITEMS.map(
    (val, index) =>
      `<div class="portfolio-item">
        <div>
          <figure>
            <img src="${val?.image}" alt="${val?.title}" class="mb-16" />
            <figcaption class="portfolio-item-title">
              ${val?.title}
            </figcaption>
          </figure>
          <div class="portfolio-item-tags-container mb-16">
              ${val?.language?.map(lang => `<span class="portfolio-item-tags-title">${lang}</span>`)}
            </div>
            <p class="portfolio-item-description mb-24">${val?.description}</p>
        </div>
        <a data-modal="modal-one" data-project="${index}">
          <button class="button-dark full-width">View More</button>
        </a>
      </div>`,
  );

  container.innerHTML = content.join('');
  handleModal()
};
space();
handleNavbar()
handleProject();
