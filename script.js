const dots = document.querySelectorAll('.slider__dots-item');
const dot = document.querySelector('.slider__dots');
const slides = document.querySelectorAll('.slide');
const text = document.querySelectorAll('.caption');

let sliderNav = function(manual) {
    dots.forEach((m) => {
        m.classList.remove("active");
    });
    slides.forEach((n) => {
        n.classList.remove("slide-active");
    });
    text.forEach((k) => {
        k.classList.remove("caption-active");
    });

    dots[manual].classList.add("active");
    slides[manual].classList.add("slide-active");
    text[manual].classList.add("caption-active");
}
    dots.forEach((m, i) => {
        m.addEventListener ("click", () => {
            sliderNav(i)
        });
    });
   
