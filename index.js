const input = document.querySelector("#InputId"),
  sendbtd = document.querySelector("#SendId"),
  deletebtn = document.querySelector("#DeleteId"),
  list = document.querySelector("#ListId");

let inputData = [];

input.addEventListener("input", function (e) {
  let value = e.target.value;

  // console.log(value);
});
sendbtd.addEventListener("click", function (e) {
  createList();
});
function createList() {
  const value = input.value;
  if (value.length == 0) {
    alert("Please fill the input");
    return;
  }
  //  log(input.value)
  inputData.push(value);
  // console.log(inputData);
  input.value = "";
  renderLi(inputData);
}
function renderLi(arr) {
  let newData = arr
    .map(
      (data, index) =>
        `<li>${
          index + 1
        }) ${data} <button onclick="DeleteLi(${index})" id="DeleteId">Delete</button></li>`
    )
    .join("");
  // console.log(newData);
  list.innerHTML = newData;
}
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createList();
  }
  //  console.log(e);
});
function DeleteLi(DeletedIndex) {
  let updatetData = inputData.filter((data, index) => index !== DeletedIndex);
  inputData = updatetData;
  renderLi(updatetData);
  // console.log(index);
}
