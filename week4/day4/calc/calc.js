const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll("operators");
console.log(numbers)
for(const button of numbers) {
    button.addEventListener("click", (e) => (console.log(e.target.innerHTML)));
}
