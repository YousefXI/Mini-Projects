// Variables For Datepicker
const datePicker = document.getElementById("datePicker");
const choseDate = document.getElementById("datePicker");

// Variables For Printing Value

const ageYears = document.getElementById("ageYears");
const ageMonths = document.getElementById("ageMonths");
const ageDays = document.getElementById("ageDays");
const ageMinutes = document.getElementById("ageMinutes");
const ageSeconds = document.getElementById("ageSeconds");

datePicker.addEventListener("change", function () {
   const options = { year: "number", month: "long", day: "numeric" };
   const selectedDate = new Date(this.value);
   const DOB = selectedDate.toLocaleDateString("en-US", options); //ERROR?

   console.log("DOB IS: " + DOB);
});

// https://www.youtube.com/watch?v=_jd6x6Ze9Qg&list=PLimvEekCsmZ99z-kjg6fZB0ZzXGfIVSYk
