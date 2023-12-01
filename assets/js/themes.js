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

const handleProject = () => {
  const items = [
    {
      title: 'Shipper 360',
      language: [
        'next',
        'stitches',
        'graphql',
        'axios',
      ],
      image: 'assets/images/Portfolio/Shipper 360.jpg',
      url: 'https://360.shipper.id/login',
      description: "Shipper360 is a website with various services, users register as a merchant then can access several services such as shipping, fulfillment, warehouse and omnichannel. A wallet account is available that can be used for payment of orders and commissions disbursement"
    },
    {
      title: 'Shipper Dashboard',
      language: [
        'next',
        'styled-jsx',
        'graphql',
        'axios',
      ],
      image: 'assets/images/Portfolio/Shipper BOS.jpg',
      url: 'https://dashboard.shipper.id/login',
      description: "Shipper Dashboard is a website for merchants, they can send goods to various locations in Indonesia (domestic) and also Intenational. A wallet account is available that can be used for payment of orders and commissions disbursement"
    },
    {
      title: 'Shipper HQ',
      language: [
        'react',
        'sass',
        'graphql',
        'axios',
      ],
      image: 'assets/images/Portfolio/Shipper HQ.jpg',
      url: 'https://mitra.shipper.id/#/login',
      description: "ShipperHQ is a website used by Shipper agents to process orders belonging to merchants and non-merchants, both domestic and international orders. A wallet account is available that can be used for payment of orders and commissions disbursement"
    },
    {
      title: 'AvidX - Profile',
      language: [
        'html',
        'tailwind',
        'javascript',
      ],
      image: 'assets/images/Portfolio/AvidX - Profile.jpg',
      url: 'https://www.avidx.app/index.html',
      description: "AvidX is a website designed to facilitate English language practice, providing an immersive learning experience for users of all proficiency levels. This project was born from a passion for developing language skills through engaging and interactive methods."
    },
    {
      title: 'AvidX - Practice',
      language: [
        'react',
        'styled-components',
        'polished',
        'axios',
        'react-query',
      ],
      image: 'assets/images/Portfolio/AvidX - Practice.jpg',
      url: 'https://practice.avidx.app/login',
      description: "AvidX Practice is a dedicated website designed to improve English language proficiency through targeted and engaging practice sessions. Starting from reading, writing, listening and speaking. User can try to practice on this website for free"
    },
    {
      title: 'Vita School',
      language: [
        'html',
        'bootstrap',
        'javascript',
        'laravel'
      ],
      image: 'assets/images/Portfolio/vita-school.png',
      url: 'https://vitaschool.sch.id/',
      description: "Vita Scholl is a web profile project is a dynamic and informative online platform dedicated to showcasing the essence of Vita School, a prominent educational institution in Surabaya. The website serves as a centralized hub for students, parents, and the community, offering insights into the school's culture, events, and latest updates."
    },
    {
      title: 'Citiplan Indonesia',
      language: [
        'html',
        'bootstrap',
        'javascript',
        'slick-slider'
      ],
      image: 'assets/images/Portfolio/citiplan.jpg',
      url: 'https://citiplanindonesia.com',
      description: "Citiplan Indonesia is a web profile project is a comprehensive and informative online platform that serves as the digital representation of Citiplan Indonesia. The website provides a detailed overview of Citiplan, showcasing its achievements, services, and commitment to excellence. Designed to offer a glimpse into the company's values and accomplishments."
    },
    {
      title: 'Froyanesia',
      language: [
        'html',
        'bootstrap',
        'javascript',
        'laravel',
      ],
      image: 'assets/images/Portfolio/froya.jpg',
      url: 'http://froya.co.id',
      disabled: true,
      description: "Froyanesia stands as a pioneering digital marketplace tailored for the buying and selling of fresh chicken, providing a convenient and reliable platform for enthusiasts of fresh chicken."
    },
    {
      title: 'Esusmart',
      language: [
        'html',
        'bootstrap',
        'javascript',
        'laravel',
      ],
      image: 'assets/images/Portfolio/esusmart.png',
      url: 'http://esusmart.com',
      disabled: true,
      description: 'Esusmart represents a groundbreaking venture into the digital realm of neighborhood convenience, serving as a dedicated online marketplace for the modern "kelontong" or mini mart. This web platform redefines the traditional shopping experience by bringing the corner store to the fingertips of users, offering a diverse range of everyday essentials in a seamless and user-friendly digital environment.'
    },
    {
      title: 'Bimi',
      language: [
        'html',
        'bootstrap',
        'javascript'
      ],
      image: 'assets/images/Portfolio/bimi.jpg',
      url: 'http://bmi.esusmart.com',
      disabled: true,
      description: "Bimi is a web profile project stands as a digital gateway to the world of Bimi, a distinguished mining company. This online platform provides a comprehensive overview of Bimi's operations, values, and contributions to the mining industry. Through thoughtful design and informative content, the web profile showcases Bimi's commitment to excellence in the field of mining"
    },
    {
      title: 'Doolen',
      language: [
        'html',
        'bootstrap',
        'javascript'
      ],
      image: 'assets/images/Portfolio/doolen.jpg',
      url: 'https://doolen.com/',
      disabled: true,
      description: "Doolen emerges as a cutting-edge online marketplace designed to revolutionize the way we buy and sell fresh produce, fruits, seafood, and daily essentials. Serving as a digital marketplace for everyday needs, Doolen connects consumers with a diverse range of high-quality, locally sourced products, offering a seamless and convenient solution for modern-day grocery shopping."
    },
    {
      title: 'Artpedia',
      language: [
        'html',
        'sass',
        'javascript'
      ],
      image: 'assets/images/Portfolio/artpedia.jpg',
      url: 'https://arathfal.github.io/artpedia/',
      disabled: false,
      description: "Artpedia is your ultimate destination for information about the vast world of art. This digital platform serves as an information hub, offering diverse insights into various art forms, techniques and cultural movements. Whether you're an art enthusiast, a student, or someone simply curious about the breadth of creativity, Artpedia provides a gateway to exploring and understanding the beauty of art."
    },
  ];

  const container = document.getElementById('portfolioContainer');
  const content = items.map(
    (val) =>
      `<div class="portfolio-item">
        <div class="portfolio-content-wrapper">
          <figure>
            <img src="${val?.image}" alt="${val?.title}" class="mb-16" />
            <figcaption class="portfolio-title">
              ${val?.title}
            </figcaption>
          </figure>
          <div class="portfolio-tags-container mb-16">
            ${val?.language?.map(lang => `<span class="portfolio-tags-item">${lang}</span>`)}
          </div>
          <p class="portfolio-content mb-24">${val?.description}</p>
        </div>
        <a href="${val?.url}" ${val?.disabled ? 'class="offline"' : ''} target="_blank">
          <button class="button-black full-width">Visit Site</button>
        </a>
      </div>`,
  );

  container.innerHTML = content.join('');
};

space();
handleNavbar()
handleProject();
