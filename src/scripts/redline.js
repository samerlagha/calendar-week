import { renderCalendar } from "./render-calendar.js";


const redLine = document.querySelector(".redline");

const currentHourBar = displayRedLineOnCurrentHourBar();
//render Red line
export function renderRedLine() {

  const dot = document.createElement("div");
  dot.classList.add("boll");

  const line = document.createElement("div");
  line.classList.add("line");

  redLine.append(boll);
  redLine.append(line);

  currentHourBar.append(redLine);
}

renderRedLine();
//отображать красную линию на текущем часовом баре
function displayRedLineOnCurrentHourBar() {

  

  const hourContainer = document.querySelectorAll(".calendar__hour-bar");

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes()

  let positionInsideHourBar = currentMinute - 15;

  redLine.style.marginTop = positionInsideHourBar + 'px';

  return [...hourContainer].find(
    el => el.dataset.day == currentDay && el.dataset.hour == currentHour
  );
}

displayRedLineOnCurrentHourBar();
