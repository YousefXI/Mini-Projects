const kgRef = document.getElementById("kg");
const lbsRef = document.getElementById("lbs");
const ozRef = document.getElementById("oz");

const convertFromKg = () => {
   let kg = kgRef.value;

   lbsRef.value = (kg * 2.205).toFixed(2);
   ozRef.value = (kg * 35.274).toFixed(2);
};

const convertFromLbs = () => {
   let lbs = lbsRef.value;

   kgRef.value = (kg / 2.205).toFixed(2);
   ozRef.value = (kg * 16).toFixed(2);
};

const convertFromOz = () => {
   let oz = kgRef.value;

   kgRef.value = (kg / 35.274).toFixed(2);
   ozRef.value = (kg / 16).toFixed(2);
};

// https://codepen.io/Sicontis/pen/RZwpmx -- Prova questo
