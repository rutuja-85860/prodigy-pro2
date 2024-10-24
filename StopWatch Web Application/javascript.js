const stopwatchDuration = document.getElementById("stopwatchDuration");
const start = document.getElementById("start");
const laps = document.getElementById("laps");
const lap = document.getElementById("lap");
const stopbtn = document.getElementById("stopbtn");
const reset = document.getElementById("reset");

let hrs = 0,
  min = 0,
  sec = 0,
  ms = 0,
  timeInterval;
start.onclick = () => {
  timeInterval = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
    }

    // stopwatchDuration.innerHTML = "${hrs}:${min}:${sec}:${ms}";
    stopwatchDuration.innerHTML =
      zeroPad(hrs) +
      ":" +
      zeroPad(min) +
      ":" +
      zeroPad(sec) +
      ":" +
      zeroPad(ms);
  }, 10);
  start.setAttribute("style", "display:none");
  stopbtn.setAttribute("style", "display:block");
  lap.setAttribute("style", "display:block");
  reset.setAttribute("style", "display:none");
  lap.removeAttribute("disabled");
};

const zeroPad = (num) => {
  return String(num).padStart(2, "0");
};

stopbtn.onclick = () => {
  clearInterval(timeInterval);
  lap.setAttribute("style", "display:none");
  reset.setAttribute("style", "display:block");
  start.setAttribute("style", "display:block");
  start.innerHTML = "Resume";
  stopbtn.setAttribute("style", "display:none");
};
reset.onclick = () => {
  laps.innerHTML = "";
  hrs = min = sec = mc = count = 0;
  clearInterval(timeInterval);
  stopwatchDuration.innerHTML = "00:00:00:00";
  start.innerHTML = "Start";
  lap.setAttribute("style", "display:block");
  lap.setAttribute("disabled", true);
  reset.setAttribute("style", "display:none");
  start.setAttribute("style", "display:block");
  stopbtn.setAttribute("style", "display:none");
};

let count = 0;

lap.onclick = () => {
  count++;
  let li = document.createElement("li");
  li.innerHTML =
    "#" +
    count +
    "  " +
    "-" +
    "  " +
    zeroPad(hrs) +
    ":" +
    zeroPad(min) +
    ":" +
    zeroPad(sec) +
    ":" +
    zeroPad(ms);
  laps.appendChild(li);
  laps.scroll({ top: laps.scrollHeight, behavior: "smooth" });
};
