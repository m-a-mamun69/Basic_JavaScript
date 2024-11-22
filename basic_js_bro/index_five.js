
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
/*
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
*/


// ------------------- JS NESTED OBJECTS ------------------- !

// Explanation
/*
nested objects = Objects inside of other Objects.
                              Allows you to represent more complex data structures
                              Child Object is enclosed by a Parent Object

                              Person{Address{}, ContactInfo{}}
                              ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/

/*
// Example- 01
const person = {
    fullName: "Mamun Rashid",
    age: 30,
    isStudent: true,
    hobbies: ["Coding","Reading","cooking"],
    address:{
        street: "Block-C, Mirpur-1",
        city: "Dhaka",
        country:"Bangladesh"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);
// console.log(person.address.city);

for(const property in person.address){
    console.log(person.address[property]);
}
*/

/*
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Mamun Rashid", 26, "Block-C, Mirpur-1",
                                                "Dhaka",
                                                "Bangladesh");

const person2 = new Person("Hasan Rony", 27, "Saheeb Bazar",
                                                    "Rajshahi",
                                                    "Bangladesh");

const person3 = new Person("Samim Reza", 27, "Sapahar",
                                            "Naogaon",
                                            "Bangladesh");
console.log(person2.name);
console.log(person2.address.city);
*/


// -------------- JS ARRAYS of OBJECTS  -------------- Date: 21.11.24

/*
const fruits = [{name:"apple", color:"red", calories: 95},
                {name:"orange", color:"orange", calories: 45},
                {name:"banana", color:"yellow", calories: 105},
                {name:"coconut", color:"white", calories: 159},
                {name:"pineapple", color:"yellow", calories: 37}
];

// fruits.push({name: "mango", color: "purple", calories: 62});

// console.log(fruits);

// fruits.forEach(fruits => console.log(fruits.color))

// const fruitsNames = fruits.map(fruits => fruits.name);
// console.log(fruitsNames);

// const yellowFruits = fruits.filter(fruits => fruits.color === "yellow");
// const lowCalories = fruits.filter(fruits => fruits.calories < 100);
// console.log(lowCalories);

const maxCalories = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit: max);
const minCalories = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit: min);
console.log(minCalories);
*/


// ----------------- JS SORTINg ---------------- Date: 21.11.24

// Explanation
/*
sort() = method used to sort elements of an array in place.
              Sorts elements as strings in lexicographic order, not alphabetical
              lexicographic = (alphabet + numbers + symbols) as strings
*/

let fruits = ["apple", "orange", "banana", "coconut", "mango"];
let numbers = [5, 12, 13, 58, 41, 8, 2];
const people = [{name: "Mamun", age: 30, gpa: 3.0},
                {name: "Rony", age: 37, gpa: 1.5},
                {name: "Samim", age: 51, gpa: 2.5},
                {name: "Harun", age: 27, gpa: 4.0}
]

fruits.sort();
numbers.sort((a, b) => a - b);
// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);