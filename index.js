let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
