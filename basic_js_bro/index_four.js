
// -------------- JS .reduce() Method -------------- Date: 14.11.24

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

