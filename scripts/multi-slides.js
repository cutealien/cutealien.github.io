const sliders = document.querySelectorAll('[data-slider]');

function plusSlides(slideIndex, slides) {
    if (slideIndex > slides.length) { return 1 }
    if (slideIndex < 1) { return slides.length }
    return slideIndex;
}

function showSlides(slideIndex, slides, dots, sliderName) {
    var i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        // dots[i].className = dots[i].classList.remove('slide__active');
        dots[i].classList.remove(`slide__active--${sliderName}`);
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add(`slide__active--${sliderName}`) ;
}

sliders.forEach(slider => {
    // Set in the html the necessary info, for example
    // html data-slide="your_slide_name"
    const slides = document.querySelectorAll(`[data-slide=${slider.dataset.slider}]`);
    // html data-slide-dot="your_slide_name"
    const dots = document.querySelectorAll(`[data-slide-dot=${slider.dataset.slider}]`);
    // html data-slide-btn="your_slide_name"
    const btns = document.querySelectorAll(`[data-slide-btn=${slider.dataset.slider}]`);

    var slideIndex = 1;
    showSlides(slideIndex, slides, dots, slider.dataset.slider);

    // for (const [key, value] of Object.entries(btns)) {
    //     value.addEventListener('click', () => {
    //         if (key === '0') {
    //             slideIndex += -1;
    //             slideIndex = plusSlides(slideIndex, slides)
    //             showSlides(slideIndex, slides, dots, slider.dataset.slider)
    //             return;
    //         }
    //         slideIndex += 1;
    //         slideIndex = plusSlides(slideIndex, slides)

    //         showSlides(slideIndex, slides, dots, slider.dataset.slider)
    //     })
    // }
    setInterval(() => {
        ++slideIndex;
        slideIndex = plusSlides(slideIndex, slides);
        showSlides(slideIndex, slides, dots, slider.dataset.slider);
    }, 8000)

    // for (const [key, value] of Object.entries(dots)) {
    //     value.addEventListener('click', () => {
    //         slideIndex = +key + 1;
    //         showSlides(slideIndex, slides, dots, slider.dataset.slider)
    //     })
    // }
})
