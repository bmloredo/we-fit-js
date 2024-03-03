document.addEventListener("DOMContentLoaded", function () {
  const buttonGroup = document.querySelector(".btn-group-vertical");
  if (buttonGroup) {
    buttonGroup.classList.remove("btn-group-vertical");
    buttonGroup.classList.add("btn-group-horizontal");
  }

  const jumbotron = document.querySelector(".jumbotron");

  if (jumbotron) {
    jumbotron.classList.add("bg-dark", "text-white", "text-right");

    jumbotron.style.display = "flex";
    jumbotron.style.flexDirection = "column";
    jumbotron.style.alignItems = "end";
    jumbotron.style.justifyContent = "space-around";

    const title = jumbotron.querySelector(".display-4");
    if (title) {
      title.style.flexBasis = "50%";
    }

    const leadText = jumbotron.querySelector(".lead");
    if (leadText) {
      leadText.style.flexBasis = "50%";
    }

    const hr = jumbotron.querySelector("hr");
    if (hr) {
      hr.style.width = "100%";
    }

    const button = jumbotron.querySelector(".btn");
    if (button) {
      button.style.marginTop = "0";
      button.classList.remove("btn-primary");
      button.style.color = "white";
      button.style.backgroundColor = "#27a844";
    }
  }

  const cards = document.querySelectorAll(".card");

  const parents = Array.from(cards).map((card) => card.parentNode);

  parents[0].parentNode.insertBefore(parents[3], parents[0]);

  parents[2].parentNode.insertBefore(parents[1], parents[2].nextSibling);

  const btAnimals = cards[0].querySelector(".btn");

  if (btAnimals) {
    btAnimals.classList.remove("btn-primary");
    btAnimals.style.color = "white";
    btAnimals.style.backgroundColor = "#27a844";
  }

  const listGroup = document.querySelector(".list-group");

  const itemList4 = document.createElement("li");
  itemList4.classList.add("list-group-item");
  itemList4.textContent = "Quarto item";
  itemList4.classList.add("active");

  const itemList5 = document.createElement("li");
  itemList5.classList.add("list-group-item");
  itemList5.textContent = "Quinto item";

  listGroup.appendChild(itemList4);
  listGroup.appendChild(itemList5);

  const activeItem = listGroup.querySelector(".active");
  activeItem.classList.remove("active");
});
