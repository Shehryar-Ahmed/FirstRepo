// setInterval(startTime, 1000); // start the timer for live time
startTime();

// create dropdown of dates
let dates = Array.from(Array(32).keys()); // create dates from 1 to 32
dates.shift(); // remove 0
createDropdown(dates, "date", d);

// create dropdown of months
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
createDropdown(months, "month", months[mo]);

// create dropdown of hours
let hours = Array.from(Array(24).keys());
createDropdown(hours, "hour", h);

// create dropdown of minutes
let minutes = Array.from(Array(60).keys());
createDropdown(minutes, "minute", m);

// create dropdown of seconds
let seconds = Array.from(Array(60).keys());
createDropdown(seconds, "second");

// populate HTML
let div = document.getElementById("DIV");
let btn = document.createElement("button");
let alarms = document.getElementById("alarms");
btn.type = "submit";
btn.textContent = "Create Alarm";
div.appendChild(btn);
btn.addEventListener("click", CreateAlarm);
