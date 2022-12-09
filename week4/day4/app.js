console.log(window)
console.log(document)

const howdyHeader = document.getElementById("howdy");
const paragraph = document.getElementsByClassName("para")

howdyHeader.innerText = "Jessika Adams"

const jessikaTest = document.getElementsByClassName("jessikaTest");
const newHeader = document.createElement("h2");
newHeader.innerText = "It be like that sometimes";
jessikaTest.append(newHeader);