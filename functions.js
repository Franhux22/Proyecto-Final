document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
    
    let currentSlide = 0;
    let isAnimating = false;
    const totalSlides = slides.length;

    // Initialize slides positions
    function initSlides() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${index * 100}%)`;
        });
    }

    // Create dots navigation
    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Update dots
    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Go to specific slide
    function goToSlide(slideIndex) {
        if (isAnimating) return;
        isAnimating = true;
        currentSlide = slideIndex;

        slides.forEach((slide, index) => {
            slide.style.transition = 'transform 0.5s ease-in-out';
            slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
        });

        updateDots();
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    // Next slide
    function nextSlide() {
        if (isAnimating) return;
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        goToSlide(currentSlide);
    }

    // Previous slide
    function prevSlide() {
        if (isAnimating) return;
        currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        goToSlide(currentSlide);
    }

    // Initialize slider
    initSlides();
    createDots();

    // Event listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Auto advance slides
    setInterval(nextSlide, 5000);

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
});