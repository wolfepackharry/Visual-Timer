const display = document.getElementById("display");
const minutesInput = document.getElementById("minutes");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
let totalSeconds = 0;
let currentSeconds = totalSeconds;
let intervalID = null;

minutesInput.addEventListener("change", () =>
{
  let input = parseInt(minutesInput.value) || 1;
  if (input < 0) input = 1;
  if (currentSeconds == totalSeconds)
  {
    display.textContent = input + ":00"; 
    totalSeconds = input * 60;
    currentSeconds = totalSeconds;
  }
  else
  {
    clearInterval(intervalID);
    intervalID = null;
    totalSeconds = input * 60;
    currentSeconds = totalSeconds;
    display.textContent = input + ":00"; 
    if (display.classList.contains("flash"))
    {
      display.classList.remove("flash");
    }
  }
})
startBtn.addEventListener("click", () => 
{
    console.log(minutesInput.value);
    if (!intervalID)
    {
      intervalID = setInterval(() => {
        if (currentSeconds <= 0)
        {
          if (display.classList.contains("flash"))
          {
            currentSeconds = totalSeconds;
            display.textContent = (totalSeconds / 60) + ":00";
            display.classList.remove("flash");
          }
          else
          {
            clearInterval(intervalID);
            intervalID = null;
            display.classList.add("flash");
          }
          return;
        }
        currentSeconds = currentSeconds - 1;
        console.log(currentSeconds);
        let seconds = currentSeconds % 60;
        let minutes = Math.floor(currentSeconds / 60);
        let addedMinuteText = ""
        let addedSecondText = ""
        if (minutes < 10){addedMinuteText = "0"}
        if (seconds < 10){addedSecondText = "0"}
        display.textContent = addedMinuteText + minutes + ":" + addedSecondText + seconds;
      }, 1000);
    }
})

pauseBtn.addEventListener("click", () => 
{
  if (intervalID)
  {
    clearInterval(intervalID)
    intervalID = null;
  }
})

resetBtn.addEventListener("click", () => 
{
  if (intervalID)
  {
    if (display.classList.contains("flash"))
    {
      display.classList.remove("flash");
    }
    clearInterval(intervalID);
    intervalID = null;
    currentSeconds = totalSeconds;
    display.textContent = (totalSeconds / 60) + ":00";
  }
})