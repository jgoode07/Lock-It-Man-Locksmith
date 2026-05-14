// Carousel for "Why Us" section
const whyUsSlides = document.querySelectorAll(".why-us__slide");
const whyUsDots = document.querySelectorAll(".why-us__dot");

let whyUsCurrentSlide = 0;

function showWhyUsSlide(index) {
  whyUsSlides.forEach((slide) => {
    slide.classList.remove("why-us__slide--active");
  });

  whyUsDots.forEach((dot) => {
    dot.classList.remove("why-us__dot--active");
  });

  whyUsSlides[index].classList.add("why-us__slide--active");
  whyUsDots[index].classList.add("why-us__dot--active");

  whyUsCurrentSlide = index;
}

whyUsDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showWhyUsSlide(index);
  });
});

setInterval(() => {
  let nextSlide = whyUsCurrentSlide + 1;

  if (nextSlide >= whyUsSlides.length) {
    nextSlide = 0;
  }

  showWhyUsSlide(nextSlide);
}, 4500);
