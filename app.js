window.addEventListener("touchstart", e => toggleTimer(e))
window.addEventListener("touchend", e => toggleTimer(e))

window.addEventListener("keyup", e => toggleTimer(e))
window.addEventListener("keypress", e => toggleTimer(e))

let timerIsGoing = false
let timerInterval = null
let timerCount = [0, 0, 0]
const timer = document.getElementById("timer")

const toggleTimer = e => {

    if (timerIsGoing) {

        if (e.type === "keypress" || e.type === "touchstart") {
            clearInterval(timerInterval)
        }
        if (e.type === "keyup" || e.type === "touchend") {
            timerIsGoing = !timerIsGoing
        }

    } else {

        if (e.type === "keypress" || e.type === "touchstart") {
            timerCount = [0, 0, 0]
            timer.innerHTML = timerCount[0] + "." + timerCount[1] + "." + timerCount[2]
            timer.style.color = "#e62e59"
        }
        if (e.type === "keyup" || e.type === "touchend") {
            timer.style.color = "#fff"

            timerInterval = setInterval(() => {

                timerCount[2]++

                if (timerCount[2] == 10) {
                    timerCount[2] = 0
                    timerCount[1]++
                }
                if (timerCount[1] == 60) {
                    timerCount[1] = 0
                    timerCount[0]++
                }

                timer.innerHTML = timerCount[0] + "." + timerCount[1] + "." + timerCount[2]
            }, 100)
            timerIsGoing = !timerIsGoing

        }
    }
}