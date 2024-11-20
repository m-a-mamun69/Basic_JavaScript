
// -------------- JS DESTRUCTURING  -------------- Date: 20.11.24

// Explanation
/*
destructuring =  extract values from arrays and objects,
                             then assign them to variables in a convenient way
                             [] = to perform array destructuring
                             {} = to perform object destructuring

SWAP THE VALUE OF TWO VARIABLES
*/

/*
let a =1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);
*/

/*
// SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);
*/

/*
// Assin array Element to Variables
const colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/

/*
// Extract Values Form Object
const person1 = {
    firstName: "Hasan",
    lastName: "Rony",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Mamun",
    lastName: "Rashid",
    age: 30,
}

const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/


// DESTRUCTURING in Function Parameter

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person1 = {
    firstName: "Hasan",
    lastName: "Rony",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Mamun",
    lastName: "Rashid",
    age: 30,
}

// displayPerson(person1);
displayPerson(person2);