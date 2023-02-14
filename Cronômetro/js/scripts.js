const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const milliseconsElement = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const continueBtn = document.querySelector("#continueBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = true;

startBtn.addEventListener("click", startTimer);

function startTimer() {
  interval = setInterval(() => {
    if (isPaused) {
      milliseconds += 10;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds >= 60) {
        minutes++;
        seconds = 0;
      }
      minutesElement.textContent = formatTimer(minutes);
      secondsElement.textContent = formatTimer(seconds);
      milliseconsElement.textContent = formatMilleSeconds(milliseconds);
    }
  }, 10);
  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function formatTimer(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilleSeconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
