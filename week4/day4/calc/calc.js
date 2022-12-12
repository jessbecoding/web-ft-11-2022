const buttons = document.querySelectorAll(".buttons");
const total = document.querySelector(".total");
const answer = document.querySelector(".answer");

let numbersToAdd = [];

const calculation = (number) => {
    numbersToAdd.push(number);
}

const calcTotal = () => {
    answer.innerHTML = "";
    const firstNumber = Number(numbersToAdd[0]);
    const secondNumber = Number(numbersToAdd[2]);
    const sum = firstNumber + secondNumber;
    const newText = sum;
    answer.append(newText);
    numbersToAdd = [];
};
total.addEventListener("click", calcTotal);

for(const button of buttons) {
    button.addEventListener("click", (e) => calculation(e.target.innerText));
}