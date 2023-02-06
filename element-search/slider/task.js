
(() => {
const activeClassName = 'slider__item_active';
const items = [...document.querySelectorAll('.slider__item')];
const sliderCount = items.length;

let currentIndex = items.findIndex(
    item => item.classList.contains(activeClassName)
);

const setCurrentSlide = index => {
    const prev = items[currentIndex];
    const current = items[index];
    
    prev.classList.remove(activeClassName);
    current.classList.add(activeClassName);

    currentIndex = index;
}

const showNextSlide = () =>
setCurrentSlide(
    currentIndex === sliderCount - 1 ? 0 : currentIndex + 1
);

const showPrevSlide = () =>
  setCurrentSlide(
    currentIndex === 0 ? sliderCount - 1 : currentIndex - 1
);

document.addEventListener('click', e => {
    const target = e.target.closest('.slider__arrow');
    if (!target) {
        retern;
    }
    const isNext = target.classList.contains('slider__arrow_next');
    if (isNext) {
        return showNextSlide();
    }
    showPrevSlide();
})
})();





