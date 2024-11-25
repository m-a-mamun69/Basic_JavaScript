
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


// ----------------- JS SORTINg ---------------- Date: 22.11.24

// Explanation
/*
sort() = method used to sort elements of an array in place.
              Sorts elements as strings in lexicographic order, not alphabetical
              lexicographic = (alphabet + numbers + symbols) as strings
*/

/*
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
*/

// ------------------- JS SHUFFLE AN ARRAY  ------------------- !
/*
//Fisher-Yates algorithm.
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q'];

// cards.sort(() => Math.random() - 0.5);

shuffle(cards);
console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}
*/


// ----------------- JS DATE Objects ---------------- Date: 23.11.24

// Explanation
/*
Data objects = Objects that contain values that represent dates and times
                These date objects can be changed and formatted
*/

/*
const date = new Date();
// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 0, 2, 3, 4, 5);
// const date = new Date(1700000000000);
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(4);

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");

if(date2 > date1){
    console.log("Happy New Year!");
}
else{
    console.log("Is Not a 'Happy New Year'!");
}
*/


// ------------------- JS CLOSURES ------------------- !

// Explanation
/*
closure = A function defined inside of another function, 
                 the inner function has access to the variables 
                 and scope of the outer function.
                 Allow for private variables and state maintenance
                 Used frequently in JS frameworks: React, Vue, Angular
*/

/*
function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }
    inner();
}

// message = "Goodbye";
outer();
*/

/*
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count Increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter =  createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);
*/

/*
function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(10);
game.decreaseScore(3);
console.log(`The Final score is ${game.getScore()}`);
*/


// ----------------- JS setTimeout() ---------------- Date: 24.11.24

// Explanation
/*
setTimeout() = function in JavaScript that allows you to schedule
                           the execution of a function after an amount of time 
                           Times are approximate
                           setTimeout(callback, delay);
*/

// setTimeout(function(){window.alert("Hello"), 3000});
// setTimeout(() => window.alert("Hello"), 3000)

// function startTimer(){
//     setTimeout(() => window.alert("Hello"), 3000)
// }

/*
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}
*/


// ------------------- JS console.time() ------------------- !

// Explanation
/*
console.time() = tool that allows you to measure the time it takes
                              for a section of code or process to execute
                              Great for identifying performance "bottlenecks"
*/

/*
function loadData(){
    console.time("loadData");

    for(let i = 0; i < 1000000000; i++){
        //pretend to load some data
    }

    console.timeEnd("loadData");
}

function processData(){
    console.time("processData");

    for(let i = 0; i < 10000000; i++){
        //pretend to load some data
    }
    console.timeEnd("processData");
}

loadData();
processData();
*/

// ----------------- JS Currency Format ---------------- Date: 25.11.24

// Explanation
/*
.toLocaleString() = returns a string with a language 
                                 sensitive representation of a number
                                 .toLocaleString("locale", {options});
*/


let number = 123456.789;

// number = number.toLocaleString("en-US");
// number = number.toLocaleString("en-IN");
// number = number.toLocaleString("bn-BD");

// number = number.toLocaleString("en-US", {style: "currency", currency: "USD"});
// number = number.toLocaleString("en-IN", {style: "currency", currency: "INR"});
number = number.toLocaleString("bn-BD", {style: "currency", currency: "BDT"});

console.log(number);