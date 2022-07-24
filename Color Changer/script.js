const bg = document.querySelector(".bg-color");
const output = document.querySelector(".output");

//Creating event listener on click on the button
const btn = document.querySelector(".btn").addEventListener("click", (e) => {
   let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
   bg.style.background = randomColor;

   output.innerHTML = "Color: " + "<span>" + randomColor + "</span>";
});
