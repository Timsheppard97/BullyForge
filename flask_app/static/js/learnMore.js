const track = document.querySelector('#carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.rightArrow');
const backButton = document.querySelector('.leftArrow');

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

//when I click left move the slides to the left


//when I click right move the slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;

    track.style.transform = "translateX(-" + amountToMove + ")"
    currentSlide.classList.remove('currentSlide');
    nextSlide.classList.add('currentSlide');
})