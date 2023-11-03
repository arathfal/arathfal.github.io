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
      //c.fill();
    }
  }

  executeFrame();
};
const handleNavbar = () => {
  const toggler = document.querySelector('.navbar-toggle'),
    icons = document.querySelector('.navbar-toggle .fa-bars'),
    navbar = document.querySelector('nav'),
    navList = document.querySelector('.navbar-list'),
    menuSection = document.querySelectorAll('nav li'),
    mainSection = document.querySelectorAll('.scrollspy');

  // for clickable event
  menuSection.forEach((v) => {
    v.onclick = () => {
      setTimeout(() => {
        menuSection.forEach((j) => j.classList.remove('active'));
        v.classList.add('active');
      }, 300);
    };
  });

  navList.classList.toggle('hide');

  toggler.addEventListener('click', (e) => {
    e.preventDefault();
    navList.classList.toggle('show');
    icons.classList.toggle('fa-times');
  });

  window.onscroll = () => {
    navbar.offsetTop < 10 ? navbar.classList.remove('shadow') : navbar.classList.add('shadow');
    mainSection.forEach((v, i) => {
      let rect = v.getBoundingClientRect().y;
      if (rect < window.innerHeight - 600) {
        menuSection.forEach((v) => v.classList.remove('active'));
        menuSection[i].classList.add('active');
      }
    });
  };
};

const scrollToTopBtn = document.querySelector('.scroll-up');
const rootElement = document.documentElement;

const scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
scrollToTopBtn.addEventListener('click', scrollToTop);

const handleProject = () => {
  const items = [
    {
      title: 'Shipper 360',
      language: 'NextJS / GraphQL / Jest',
      image: 'assets/images/Portfolio/Shipper 360.jpg',
      url: 'https://mitra.shipper.id/#/login',
    },
    {
      title: 'Shipper Dashboard',
      language: 'NextJS / GraphQL / Jest',
      image: 'assets/images/Portfolio/Shipper BOS.jpg',
      url: 'https://dashboard.shipper.id/login',
    },
    {
      title: 'Shipper HQ',
      language: 'ReactJS / GraphQL / Jest',
      image: 'assets/images/Portfolio/Shipper HQ.jpg',
      url: 'https://mitra.shipper.id/#/login',
    },
    {
      title: 'AvidX - Practice',
      language: 'ReactJS / Axios',
      image: 'assets/images/Portfolio/AvidX - Practice.jpg',
      url: 'https://practice.avidx.app/login',
    },
    {
      title: 'AvidX',
      language: 'HTML / Tailwind / Javascript',
      image: 'assets/images/Portfolio/AvidX - Profile.jpg',
      url: 'https://www.avidx.app/index.html',
    },
    
    {
      title: 'Vita School',
      language: 'HTML / CSS / Javascript',
      image: 'assets/images/Portfolio/vita-school.png',
      url: 'https://vitaschool.sch.id/',
    },
    {
      title: 'Froyanesia',
      language: 'HTML / CSS / Javascript',
      image: 'assets/images/Portfolio/froya.jpg',
      url: 'http://froya.co.id',
    },
    {
      title: 'Esusmart',
      language: 'HTML / CSS / Javascript',
      image: 'assets/images/Portfolio/esusmart.png',
      url: 'http://esusmart.com',
    },
    {
      title: 'Bimi',
      language: 'HTML / CSS / Javascript',
      image: 'assets/images/Portfolio/bimi.jpg',
      url: 'http://bmi.esusmart.com',
    },
    {
      title: 'Citiplan Indonesia',
      language: 'HTML / CSS / Javascript',
      image: 'assets/images/Portfolio/citiplan.jpg',
      url: 'https://citiplanindonesia.com',
    },
    {
      title: 'Doolen',
      language: 'HTML / CSS / Javascript',
      image: 'assets/images/Portfolio/doolen.jpg',
      url: 'https://doolen.com/',
    },
    {
      title: 'Artpedia',
      language: 'HTML / CSS / Javascript',
      image: 'assets/images/Portfolio/artpedia.jpg',
      url: 'https://arathfal.github.io/artpedia/',
    },
  ];

  const container = document.getElementById('portfolioContaniner');
  const content = items.map(
    (val) =>
      `<div class="portfolio-item">
        <figure>
          <img src="${val.image}" alt="Undangan Online" />
        </figure>
        <div class="card"></div>
          <div class="portfolio-caption">
            <h5 class="portfolio-title">${val.title}</h5>
            <p class="language">${val.language}</p>
          </div>
          <a href="${val.url}" target="_blank">
            <button class="button-pinky">Learn More</button>
          </a>
        </div>
      `,
  );

  container.innerHTML = content.join('');
};

space();
handleNavbar();
handleProject();
