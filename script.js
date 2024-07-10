let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsList = document.getElementById("laps");

startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  displayTime(elapsedTime);
  lapsList.innerHTML = "";
});

lapButton.addEventListener("click", () => {
  if (isRunning) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
  }
});

function updateTime() {
  elapsedTime += 1;
  displayTime(elapsedTime);
}

function displayTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  display.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}
