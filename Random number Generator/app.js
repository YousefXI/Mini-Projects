function randomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}

const generateBnt = document.querySelector(".generate");
generateBnt.addEventListener("click", run);

function run() {
   let min_number = document.querySelector(".min").value;
   let max_number = document.querySelector(".max").value;

   const number = randomInteger(min_number, max_number);

   document.querySelector(".number-generated").innerHTML = number;
}
