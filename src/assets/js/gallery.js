document.addEventListener("DOMContentLoaded", () => {
    try {
        let buttons = document.querySelectorAll("[data-gallery]");
        let slider = document.getElementById('gallerySlider');
        let slides = document.querySelectorAll(".gallerySlide");

        buttons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();

                e.currentTarget.parentElement.querySelector(".active").classList.remove("active");
                e.currentTarget.classList.add("active");

                let transform = 0;
                let slide = slider.querySelector(`#${e.currentTarget.dataset.gallery}`);

                for (let i in Array.from(slider.children)) {
                    if (Array.from(slider.children)[i] == slide) {
                        transform = i * 100;
                        slides.forEach(slide => slide.style.transform = `translateX(-${transform}%)`)
                    }
                }
            })
        })
    } catch(err){
        console.log(err)
    }
    

})