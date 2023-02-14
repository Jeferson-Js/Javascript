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
pauseBtn.addEventListener("click", pauseTimer);
continueBtn.addEventListener("click", continueTimer);
resetBtn.addEventListener("click", resetTimer);

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
}

function formatTimer(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilleSeconds(time) {
  return time < 100 ? `${time}`.padStart(3,"0") : time;
}

function pauseTimer() {
    isPaused = false;
}

function continueTimer() {
    isPaused = true;
}


function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesElement.textContent = formatTimer(minutes);
    secondsElement.textContent = formatTimer(seconds);
    milliseconsElement.textContent = formatMilleSeconds(milliseconds);
}
