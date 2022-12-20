const userName = document.querySelector(".userName");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const dob = document.querySelector(".dob").value;
const radio = document.querySelector(".radio").value;


userName.addEventListener("input", (e) => updateValue(e));
firstName.addEventListener("input", (e) => updateValue(e));
lastName.addEventListener("input", (e) => updateValue(e));
dob.addEventListener("input", (e) => updateValue(e));

function updateValue(e) {
    console.log(e);
}