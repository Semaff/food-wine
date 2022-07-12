document.addEventListener("DOMContentLoaded", () => {

    try {
        // Close
        let closeBtn = document.querySelectorAll("[data-close]");

        closeBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                let popup = e.currentTarget.closest("[data-popup]");

                popup.style.visibility = "hidden";
                popup.style.opacity = "0";
            })
        })


        // Board
        let boardItems = document.querySelectorAll(".board__item");
        let boardPopup = document.getElementById("boardPopup")

        boardItems.forEach(btn => {
            btn.addEventListener("click", e => {
                if (boardPopup.style.visibility == "visible") {
                    return
                }

                boardPopup.style.visibility = "visible";
                boardPopup.style.opacity = "1";
            })
        })
    } catch (err) {

    }

})