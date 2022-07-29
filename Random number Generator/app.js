function randomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}

const generateBnt = document.querySelector(".generate");
generateBnt.addEventListener("click", run);

function run() {
   let minNumber = document.querySelector(".min").value;
   let maxNumber = document.querySelector(".max").value;

   const number = randomInteger(minNumber, maxNumber);

   document.querySelector(".number-generated").innerText = number;

   if (number === "NaN") {
      number.innerText = no;
   }
}
