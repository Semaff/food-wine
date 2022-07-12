document.addEventListener("DOMContentLoaded", () => {
    try {
        const slider = document.querySelector(".stats");
        const slides = document.querySelectorAll(".stat");
        const button = document.querySelectorAll("[data-stats]");

        const slidesLength = slides.length

        let current = 0;
        let prev = slides.length;
        let next = 1;

        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
        }

        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slidesLength - 1);
        const gotoNext = () => current < slidesLength - 1 ? gotoNum(current + 1) : gotoNum(0);

        const gotoNum = number => {
            current = number;
            prev = current - 1;
            next = current + 1;

            for (let i = 0; i < slidesLength; i++) {
                slides[i].classList.remove("active");
                slides[i].classList.remove("prev");
                slides[i].classList.remove("next");
            }

            if (next >= slidesLength) {
                next = 0;
            }

            if (prev == -1) {
                prev = slidesLength - 1;
            }

            slides[current].classList.add("active");
            slides[prev].classList.add("prev");
            slides[next].classList.add("next");
        }
    } catch (err) {
        console.log(err)
    }
})