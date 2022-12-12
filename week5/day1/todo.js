const mainContainer = document.querySelector(".mainContainer");
const mainHeader = document.querySelector(".mainHeader");
const addButton = document.querySelector(".addButton");
const enterItem = document.querySelector(".enterItem");
const list = document.querySelector(".list");

function completeItem() {
    list.remove()
}

function addItem() {
    const newItem = document.createElement("li")
    const completeButton = document.createElement("button");
    newItem.innerText = enterItem.value;
    completeButton.innerText = "Done!"
    list.append(newItem, completeButton);
    completeButton.addEventListener("click", completeItem);
}

addButton.addEventListener("click", addItem);
