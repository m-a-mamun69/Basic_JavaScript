
// -------------- JS ARROW FUNCTIONS -------------- Date: 15.11.24

// Explanation
/*
arrow functions = a concise way to write function expressions
                                 good for simple functions that you use only once
                                 (parameters) => ome code
*/

/*
const hello = (name, age) => {console.log(`Hello, ${name}! `)
                            console.log(`You are ${age} years old`)};

hello("Rashid", 25);
*/

/*
setTimeout( () => console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(`Square Numbers are, ${squares}! `);
console.log(`Cobe Numbers are, ${cubes}! `);
console.log(`Even Numbers are, ${evenNumbers}! `);
console.log(`Odd Numbers are, ${oddNumbers}! `);
console.log(`Total of Numbers, ${total}! `);
*/


// ---------------- JS  ---------------- !

// Explanation
/*
object = A collection of related properties and/or methods
               Can represent real world objects (people, products, places)
               object = {key:value, function()}
*/

const person = {
    firstName: "Samim",
    lastName: "Reza",
    age: 27,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Samim Reza!")},
    eat: function(){console.log("Hi! I am eating Kebab!")},
}

const person2 = {
    firstName: "Mamun",
    lastName: "Rashid",
    age: 26,
    isEmployed: false,
    sayHello: () => console.log("Hi! I am Mamun Rashid!"),
    eat: () => console.log("Hi! I am eating Beef Barger!"),
}

person.sayHello();
person2.sayHello();

person.eat();
person2.eat();
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isEmployed);