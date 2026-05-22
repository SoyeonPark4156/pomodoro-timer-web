const saved = localStorage.getItem('timerMinutes');
const INITIAL_SECONDS = (saved ? Number(saved) : 25) * 60;

let remainingSeconds = INITIAL_SECONDS;
let intervalId = null;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function updateDisplay() {
  document.querySelector('.time').textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (intervalId !== null) return;

  intervalId = setInterval(function () {
    remainingSeconds--;
    updateDisplay();

    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = INITIAL_SECONDS;
  updateDisplay();
}

updateDisplay();
