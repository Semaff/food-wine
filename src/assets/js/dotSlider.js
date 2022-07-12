document.addEventListener("DOMContentLoaded", () => {
    try {

        let slides = document.querySelectorAll("#dotSlide");
        let dots = Array.from(document.querySelectorAll("#dot"));

        const dotsContainer = document.getElementById("dotsContainer");
        let radioAmount = slides.length;

        let transform;

        for (let i = 1; i < radioAmount; i++) {
            let elem = dots[0].cloneNode(true);
            elem.checked = false;
            dotsContainer.append(elem);
            dots.push(elem);
        }

        dots.forEach(dot => {
            dot.addEventListener("click", (e) => {
                for (let i in dots) {
                    if (dots[i] == e.currentTarget) {
                        transform = i * 100;

                        slides.forEach(slide => {
                            slide.style.transform = `translateX(-${transform}%)`;
                        })
                    }
                }
            })
        })

    } catch (err) {
        console.log(err)
    }

})