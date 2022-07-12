document.addEventListener("DOMContentLoaded", () => {
    try {

        let direcButtons = document.querySelectorAll("[data-direction]");
        let slides = document.querySelectorAll(".direction");

        let currentTransform = 0;
        let maxTransform = (slides.length - 1) * 100;

        direcButtons.forEach(btn => {
            btn.addEventListener("click", e => {
                if(e.currentTarget.dataset.direction == "left" && currentTransform !== 0) {
                    slides.forEach(slide => slide.style.transform = `translateX(-${currentTransform - 100}%)`);
                    currentTransform -= 100;

                    if(e.currentTarget.parentElement.querySelector('.disabled')) {
                        e.currentTarget.parentElement.querySelector('.disabled').classList.remove("disabled");
                    }

                    if(currentTransform == 0){
                        e.currentTarget.classList.add("disabled")
                    }
                } else if (e.currentTarget.dataset.direction == "right" && currentTransform !== maxTransform) {
                    slides.forEach(slide => slide.style.transform = `translateX(-${currentTransform + 100}%)`);
                    currentTransform += 100;

                    if(e.currentTarget.parentElement.parentElement.querySelector('.disabled')) {
                        e.currentTarget.parentElement.parentElement.querySelector('.disabled').classList.remove("disabled");
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