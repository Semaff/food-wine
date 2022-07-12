document.addEventListener("DOMContentLoaded", () => {
    try {
        let introButtons = document.querySelectorAll("[data-intro]");
        let slides = document.querySelectorAll(".slide");

        let currentTransform = 0;
        let maxTransform = (slides.length - 1) * 100;

        introButtons.forEach(btn => {
            btn.addEventListener("click", e => {
                if(e.currentTarget.dataset.intro == "left" && currentTransform !== 0) {
                    slides.forEach(slide => slide.style.transform = `translateX(-${currentTransform - 100}%)`);
                    currentTransform -= 100;

                    if(e.currentTarget.parentElement.parentElement.querySelector('.disabled')) {
                        e.currentTarget.parentElement.parentElement.querySelector('.disabled').classList.remove("disabled");
                    }

                    if(currentTransform == 0){
                        e.currentTarget.classList.add("disabled")
                    }
                } else if (e.currentTarget.dataset.intro == "right" && currentTransform !== maxTransform) {
                    slides.forEach(slide => slide.style.transform = `translateX(-${currentTransform + 100}%)`);
                    currentTransform += 100;

                    if(e.currentTarget.parentElement.parentElement.querySelector('.disabled')) {
                        e.currentTarget.parentElement.parentElement.querySelector('.disabled').classList.remove("disabled");
                    }

                    if(currentTransform == maxTransform){
                        e.currentTarget.classList.add("disabled")
                    }
                }
            })
        })
    } catch (err) {
        console.log(err)
    }
})