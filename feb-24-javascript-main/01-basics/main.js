window.onload = function () {
  const btnAdd = document.querySelector("#btnAdd");
  const inputEl = document.getElementById("input");
  const listContainer = document.querySelector("#list-container");

  btnAdd.addEventListener("click", function (event) {
    if (inputEl.value.trim() === "") {
      return;
    }
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      <p>${inputEl.value.toUpperCase()}</p>
    `;
    liElement.classList.add("list-item");
    liElement.addEventListener("click", function () {
      this.remove();
    });
    listContainer.appendChild(liElement);
    inputEl.value = "";
  });
};
