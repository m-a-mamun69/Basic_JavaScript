
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


// ------------------- JS Object  ------------------- !

// Explanation
/*
object = A collection of related properties and/or methods
               Can represent real world objects (people, products, places)
               object = {key:value, function()}
*/

/*
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
*/


// -------------- JS THIS Keywords -------------- Date: 16.11.24

// Explanation
/*
this = reference to the object where THIS is used
          (the object depends on the immediate context)
*/

/*
const person1 = {
    name: "mRashid",
    favFood: "hamBurgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "mHasan",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.eat();
person2.eat();
*/


// ------------------- JS CONSTRUCTORS   ------------------- !

// Explanation
/*
constructor = special method for defining the
                         properties and methods of objects
*/


function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("BMW", "7 Series", 2024, "red");
const car3 = new Car("Mercedes", "S-Class", 2024, "red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);