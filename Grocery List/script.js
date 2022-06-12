//Selectors
const listInput = document.querySelector('.list-input')
const listButton = document.querySelector('.list-button')
const groceryList = document.querySelector('.grocery-list')

//Event Listeners
listButton.addEventListener('click', addGrocery)


//Functions
function addGrocery(event) {
  event.preventDefault();
  //create grocery div
  const listDiv = document.createElement("div");
  listDiv.classList.add("grocery");
  //create LI
  const newGrocery = document.createElement("li");
  newGrocery.innerText = listInput.value;
  newGrocery.classList.add("grocery-item");
  listDiv.appendChild(newGrocery);

  groceryList.appendChild(listDiv);

  newGrocery.addEventListener("click", (event) => {
    newGrocery.classList.toggle("completed")
  })
}