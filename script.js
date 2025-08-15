// ===== Changing Role Animation =====
const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer"
];

let roleIndex = 0;
const changingText = document.getElementById("changing-text");

function changeRole() {
  changingText.style.opacity = 0; // fade out
  setTimeout(() => {
    changingText.textContent = roles[roleIndex];
    changingText.style.opacity = 1; // fade in
    roleIndex = (roleIndex + 1) % roles.length;
  }, 500); // fade transition duration
}

changeRole();
setInterval(changeRole, 4000); // every 4 seconds

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Active Link on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== Fade-in Animation =====
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);


// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Project image carousel
    let currentIndex = 0;
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-track img");
    const totalSlides = slides.length;

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000);