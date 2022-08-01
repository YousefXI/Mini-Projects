// Variables For Datepicker
const datePicker = document.getElementById("datePicker");
const chosenDate = document.getElementById("chosenDate");

// Variables For Printing Value

const ageYears = document.getElementById("ageYears");
const ageMonths = document.getElementById("ageMonths");
const ageDays = document.getElementById("ageDays");
const ageMinutes = document.getElementById("ageMinutes");
const ageSeconds = document.getElementById("ageSeconds");

datePicker.addEventListener("change", function () {
   var options = { year: "number", month: "long", day: "numeric" };
   var selectedDate = new Date(this.value);
   var DOB = selectedDate.toLocaleDateString(); //Grabbing The Date Selected

   console.log("DOB IS : " + DOB);
   chosenDate.innerHTML = "DOB : " + " " + DOB;

   var millisecondsBtwDOB = Date.parse(DOB);
   var millisecondsBtwNow = Date.now();

   var ageInMilliseconds = millisecondsBtwNow - millisecondsBtwDOB;

   //console.log(ageInMilliseconds);

   var miliSeconds = ageInMilliseconds;
   var second = 1000;
   var minute = second * 60;
   var hour = minute * 60;
   var day = hour * 24;
   var month = day * 30;
   var year = day * 365;

   //Starting Calculation

   var years = Math.round(miliSeconds / year);
   var months = years * 12;
   var days = years * 365;
   var hours = Math.round(miliSeconds / hour);
   var seconds = Math.round(miliSeconds / second);

   //Printing Values in Box

   ageYears.innerHTML = years;
   ageMonths.innerHTML = months;
   ageDays.innerHTML = days;
   ageMinutes.innerHTML = hours;
   ageSeconds.innerHTML = seconds;
});

// https://www.youtube.com/watch?v=_jd6x6Ze9Qg&list=PLimvEekCsmZ99z-kjg6fZB0ZzXGfIVSYk
