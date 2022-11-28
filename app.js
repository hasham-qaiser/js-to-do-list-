console.log("hello");

//select the form
const form = document.querySelector("#todo-form");
// listen for submit
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // select the text in the input
  const input = document.querySelector("#todo-input");
  // select the to do list
  const list = document.querySelector("#todo-form");
  // create a new list item with the input text
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  list.append(newLi);
  input.value = "";
});
