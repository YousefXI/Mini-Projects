const startDate = document.querySelector("#startDate");
const endDate = document.querySelector("#endDate");
const container = document.querySelector(".container");
const output = document.querySelector("#output");
const submit = document.querySelector(".submit-btn");

submit.addEventListener("click", (e) => {
   let start = new Date(startDate.value);
   let end = new Date(endDate.value);

   let diff = (end - start) / (1000 * 3600 * 24);

   // Creating output element
   if (diff == 1) {
      output.innerText = "Result: " + diff + " day";
      container.append(output);
      document.body.append(container);
   } else {
      output.innerText = "Result: " + diff + " days";
      container.append(output);
      document.body.append(container);
   }
});
