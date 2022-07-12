document.addEventListener("DOMContentLoaded", () => {
    try {
        let reviewButtons = document.querySelectorAll("[data-review]");
        let slides = document.querySelectorAll(".review");

        let currentTransform = 0;
        let maxTransform;

        if(window.matchMedia("(max-width: 991px)").matches){
            maxTransform = (slides.length - 1) * 100;
        } else {
            maxTransform = (slides.length - 2)  * 100;
        }

        reviewButtons.forEach(btn => {
            btn.addEventListener("click", e => {
                if(e.currentTarget.dataset.review == "left" && currentTransform !== 0) {
                    slides.forEach(slide => slide.style.transform = `translateX(-${currentTransform - 100}%)`);
                    currentTransform -= 100;

                    if(e.currentTarget.parentElement.querySelector('.disabled')) {
                        e.currentTarget.parentElement.querySelector('.disabled').classList.remove("disabled");
                    }

                    if(currentTransform == 0){
                        e.currentTarget.classList.add("disabled")
                    }
                } else if (e.currentTarget.dataset.review == "right" && currentTransform !== maxTransform) {
                    slides.forEach(slide => slide.style.transform = `translateX(-${currentTransform + 100}%)`);
                    currentTransform += 100;

                    if(e.currentTarget.parentElement.querySelector('.disabled')) {
                        e.currentTarget.parentElement.querySelector('.disabled').classList.remove("disabled");
                    }

                    if(currentTransform == maxTransform){
                        console.log(e.currentTarget)
                        e.currentTarget.classList.add("disabled")
                    }
                }
            })
        })

    } catch(err){
        console.log(err)
    }
})