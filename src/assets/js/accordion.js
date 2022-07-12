document.addEventListener("DOMContentLoaded", () => {
    try {
        let headers = document.querySelectorAll(".accordion__header");

        headers.forEach(btn => {
            btn.addEventListener("click", () => {
                let content = btn.parentElement.querySelector(".accordion__content");

                if (content.style.display == "block"){
                    content.style.display = "none"
                } else {
                    content.style.display = "block"
                }
            })
        })

    } catch(err){
        console.log(err)
    }
})