const speak = () => {
    const input = document.querySelector(".inputfield").value;
    console.log(input)
}

const button = document.querySelector(".button");

// input.addEventListener("change", (e) => console.log(e.target.value));

button.addEventListener("click", () => speak());

