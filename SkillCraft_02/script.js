let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("time-display");
let interval = null;
let running = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function startStop() {
  if (!running) {
    interval = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
    running = true;
  }
}

function pause() {
  clearInterval(interval);
  running = false;
}

function reset() {
  clearInterval(interval);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  running = false;
}

function lap() {
  if (!running) return;
  const lapTime = display.innerText;
  const lapItem = document.createElement("li");
  lapItem.innerText = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(lapItem);
}
