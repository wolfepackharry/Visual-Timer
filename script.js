const display = document.getElementById("display");
const minutesInput = document.getElementById("minutes");
const startBtn = document.getElementById("startBtn");
let totalSeconds = 0;
startBtn.addEventListener("click", () => 
{
    console.log(minutesInput.value);
    totalSeconds = minutesInput.value * 60;
    setInterval(() => {
        totalSeconds = totalSeconds - 1;
        console.log(totalSeconds);
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);
        let addedMinuteText = ""
        let addedSecondText = ""
        if (minutes < 10){addedMinuteText = "0"}
        if (seconds < 10){addedSecondText = "0"}
        display.textContent = addedMinuteText + minutes + ":" + addedSecondText + seconds;
      }, 1000);
})