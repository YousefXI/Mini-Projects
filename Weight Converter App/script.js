let kgRef = document.getElementById("kg");
let lbsRef = document.getElementById("lbs");
let ozRef = document.getElementById("oz");
let inputs = document.querySelectorAll("input");

const clearBtn = document.getElementById("clear-btn");

let convertFromKg = () => {
   let kg = kgRef.value;
   lbsRef.value = (kg * 2.205).toFixed(2);
   ozRef.value = (kg * 35.274).toFixed(2);
};

let convertFromLbs = () => {
   let lbs = lbsRef.value;
   kgRef.value = (lbs / 2.205).toFixed(2);
   ozRef.value = (lbs * 16).toFixed(2);
};

let convertFromOz = () => {
   let oz = ozRef.value;
   kgRef.value = (oz / 35.274).toFixed(2);
   lbsRef.value = (oz / 16).toFixed(2);
};

clearBtn.addEventListener("click", () => {
   inputs.forEach((input) => (input.value = ""));
});

kg.addEventListener("input", convertFromKg);
lbs.addEventListener("input", convertFromLbs);
oz.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);
