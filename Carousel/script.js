// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.images img');
const totalSlides = slides.length;

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const indicators = document.querySelector('.indicators');


slides.forEach((ele, index) => {
    const indicator = document.createElement('div');
    indicator.addEventListener('click', () => goToSlide(index));
    indicators.appendChild(indicator);
});

function updateIndicators() {
    document.querySelectorAll('.indicators div').forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.inner-container').style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initial slide display and indicator activation
showSlide(currentSlide);
