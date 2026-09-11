const cycleButtons = document.querySelectorAll('.cycle-step');
const cycleTitle = document.getElementById('cycleTitle');
const cycleText = document.getElementById('cycleText');

cycleButtons.forEach(button => {
  button.addEventListener('click', () => {
    cycleButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    cycleTitle.textContent = button.dataset.title;
    cycleText.textContent = button.dataset.text;
  });
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
