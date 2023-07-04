const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const input = document.querySelector('.input');
const recherche= document.querySelector('.search');
const fermer = document.querySelector('Button');

let currentSlide = 0;

slides[currentSlide].classList.add('active');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
recherche.addEventListener('click', () => {
  input.style.display = 'block';
});

fermer.addEventListener('click', () => {
  input.style.display = 'none';
});

 
