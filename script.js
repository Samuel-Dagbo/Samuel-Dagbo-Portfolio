/* =========================
   Contact Form EmailJS
========================= */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  formStatus.textContent = "Sending...";
  
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  emailjs.send("service_3bqaqgd", "template_o5yb82c", params)
    .then(() => {
      formStatus.textContent = "Message sent! I’ll get back to you.";
      contactForm.reset();
      setTimeout(() => formStatus.textContent = "", 4000);
    })
    .catch((err) => {
      formStatus.textContent = "Failed to send. Please try again.";
      console.error("EmailJS Error:", err);
    });
});

/* =========================
   Dark Mode Toggle
========================= */
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* =========================
   Animate Skill Bars
========================= */
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
  const width = bar.style.width;
  bar.style.width = '0';
  setTimeout(() => {
    bar.style.width = width;
  }, 500);
});

/* =========================
   Smooth Scroll
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    navbar.classList.remove('active');
    hamburger.classList.remove('open');
  }
});