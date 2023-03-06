const slides = document.querySelectorAll('[data-js="carousel__item"]');
const proxBotao = document.querySelector('[data-js="carousel__button--next"]');
const voltaBotao = document.querySelector('[data-js="carousel__button--prev"]');

let currentSlideIndex = 0;

proxBotao.addEventListener('click', () => {
    if(currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }

    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible');
    })

    slides[currentSlideIndex].classList.add('carousel__item--visible');
})

voltaBotao.addEventListener('click', () => {
    if(currentSlideIndex === 0){
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
    }
    

    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible')
    })

    slides[currentSlideIndex].classList.add('carousel__item--visible')
})