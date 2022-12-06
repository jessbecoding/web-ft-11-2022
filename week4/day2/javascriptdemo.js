console.log("Hello World"); 

let houston = "hot";
console.log(houston);
houston = 2;
console.log(houston);

const ethan = "a cool dude";
console.log(ethan);

function printMyName(name,lastname){
    console.log(name,lastname);
}

printMyName("Jessika", "Adams");

const ethanIsCool = (firstMsg,secondMsg) => {
    console.log(firstMsg,secondMsg);
}

ethanIsCool("hippity hoppity", "get off my property");

const fruits = ["Banana", "Apple", "Kiwi"];

console.log(fruits[2]);

fruits.push("Strawberry");
console.log(fruits);

for (const fruit of fruits) {
    console.log(fruit)
}

fruits.forEach((fruit) => console.log(fruit))

const student = {
    name: "Jaye"
}

console.log(student)
console.log(student.name)

student.lastName = "Lasseigne";
student["age"] = "20";
console.log(student);

for (const key in student) {
    console.log(student[key]);
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

