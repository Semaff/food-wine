document.addEventListener("DOMContentLoaded", () => {

    try {
        let teamButtons = document.querySelectorAll("[data-team]");
        let slides = document.querySelectorAll("#team__slide");

        let currentTransform = 0;
        let maxTransform;

        if(window.matchMedia("(max-width: 1200px)").matches){
            maxTransform = (slides.length - 1) * 100;
        } else {
            maxTransform = (slides.length - 2)  * 100;
        }

        teamButtons.forEach(btn => {
            btn.addEventListener("click", e => {
                if(e.currentTarget.dataset.team == "left" && currentTransform !== 0) {
                    slides.forEach(slide => slide.style.transform = `translateX(-${currentTransform - 100}%)`);
                    currentTransform -= 100;

                    if(e.currentTarget.parentElement.querySelector('.disabled')) {
                        e.currentTarget.parentElement.querySelector('.disabled').classList.remove("disabled");
                    }

                    if(currentTransform == 0){
                        e.currentTarget.classList.add("disabled")
                    }
                } else if (e.currentTarget.dataset.team == "right" && currentTransform !== maxTransform) {
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