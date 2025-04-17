const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider');


let currentSlide = 0;
const slideWidth = 400;

const firstClone = slides[0].cloneNode(true);
slider.appendChild(firstClone);

let totalSlides = slides.length + 1; 

function goToSlide(index) {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function updateDots(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  let realIndex = index % slides.length;
  slides[realIndex].classList.add('active');
  dots[realIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  prevBtn.style.border = '';
  nextBtn.style.border = "1px solid white";

  currentSlide++;
  goToSlide(currentSlide);
  updateDots(currentSlide);

  if (currentSlide === totalSlides - 1) {
    setTimeout(() => {
      slider.style.transition = 'none';
      currentSlide = 0;
      slider.style.transform = `translateX(0px)`;
      updateDots(currentSlide);
    }, 500);
  }
});

prevBtn.addEventListener('click', () => {
  nextBtn.style.border = '';
  prevBtn.style.border = "1px solid white";

  if (currentSlide === 0) {
    currentSlide = slides.length; 
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    setTimeout(() => {
      currentSlide--;
      slider.style.transition = 'transform 0.5s ease-in-out';
      goToSlide(currentSlide);
      updateDots(currentSlide);
    }, 20);
  } else {
    currentSlide--;
    goToSlide(currentSlide);
    updateDots(currentSlide);
  }
});


dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.getAttribute('data-index'));
    goToSlide(currentSlide);
    updateDots(currentSlide);
  });
});
