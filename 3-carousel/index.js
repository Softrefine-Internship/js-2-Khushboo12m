const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${index * 400}px)`;

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');

  currentSlide = index;
}

nextBtn.addEventListener('click', () => {
  let newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
});

prevBtn.addEventListener('click', () => {
  let newIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(parseInt(dot.getAttribute('data-index')));
  });
});
