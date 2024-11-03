export const prevBtn = document.querySelector('.btn-prev');
export const nextBtn = document.querySelector('.btn-next');
const slides = document.querySelector('.slide');


function moveSliderLeft() {
    slides.style.left = "-100px";
}

function moveSliderRight() {
    slides.style.left = "100px";
}

export {moveSliderLeft};
export {moveSliderRight};