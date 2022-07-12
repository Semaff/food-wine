document.addEventListener("DOMContentLoaded", () => {

    let endCount = new Date("Jul 21, 2022 11:32:52").getTime();

    let timer = setInterval(function () {

        let now = new Date().getTime();
        let timeleft = endCount - now;

        if (timeleft < 0) {
            clearInterval(timer);
            document.getElementById("days").parentElement.style.display = "none";
            document.getElementById("hours").parentElement.style.display = "none";
            document.getElementById("minutes").parentElement.style.display = "none";
            document.getElementById("seconds").parentElement.style.display = "none";
            document.getElementById("countForm").style.display = "none";
            document.getElementById("end").style.display = "block";
        } else {

            try {
                let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
                let daysPercent = `${Math.round((1000 - Math.round(days / 0.365)) / 10)}%`;

                let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let hoursPercent = `${100 - Math.round(hours / 0.24)}%`;

                let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                let minutesPercent = `${100 - Math.round(minutes / 0.6)}%`;

                let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
                let secondsPercent = `${100 - Math.round(seconds / 0.6)}%`;

                document.getElementById("days").textContent = days;
                document.getElementById("days").parentElement.style.setProperty("--progress", daysPercent);

                document.getElementById("hours").textContent = hours;
                document.getElementById("hours").parentElement.style.setProperty("--progress", hoursPercent);

                document.getElementById("minutes").textContent = minutes;
                document.getElementById("minutes").parentElement.style.setProperty("--progress", minutesPercent);

                document.getElementById("seconds").textContent = seconds;
                document.getElementById("seconds").parentElement.style.setProperty("--progress", secondsPercent);
            } catch (err) {
                clearInterval(timer)
            }
        }
    }, 1000)

})