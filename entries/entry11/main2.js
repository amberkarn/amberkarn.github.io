
// let button = document.querySelector(".button");
// let wrapper = document.querySelector(".wrapper");
// button.addEventListener("click", function(event) {
//   console.log(event, event.target);
//   let newItem = document.createElement("div");
//   newItem.classList.add("new-content");
//   newItem.innerHTML = " leave ";
//   wrapper.appendChild(newItem);
// });

var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});