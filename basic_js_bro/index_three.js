
// ------------ JavaScript Dice Roller program -------------- Date: 11.11.24

/*
function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
*/


// -------------- JS Random Password Generator -------------- Date: 12.11.24

/*
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()+_-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : ""; 

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    // console.log(allowedChars);
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase, 
                                includeNumbers, 
                                includeSymbols); 

console.log(`Generated password: ${password}`);
*/

// ----------------- JS CallBack Function ----------------- !

// Explanation
/*
callback = a function that is passed as an argument
                   to another function.

                   used to handle asynchronous operations:
                   1. Reading a file
                   2. Network requests
                   3. Interacting with databases
*/

/*
// hello(goodbay);
// hello(leave);
hello(wait);

function hello(callback){
    console.log("Hello!, Guys");
    callback();
}

function goodbay(){
    console.log("Goodbye")
}

function leave(){
    console.log("Leave")
}
function wait(){
    console.log("Wait")
}
*/

/*
sum(displayPage, 8, 5);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH3").textContent = result;
}
*/


// ----------------- JS forEach() Method ----------------- !

// Explanation
/*
forEach() = method used to iterate over the elements 
                    of an array and apply a specified function (callback)
                    to each element

                    array.forEach(callback)
                    element, index, array are provide
*/

/*
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element, index, array){
    console.log(element);
}
*/
/*
let fruits = ["apple", "orange", "banana", "coconu"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}
*/


// -------------- JS map() Method -------------- Date: 13.11.24

// Explanation
/*
 .map() = accepts a callback and applies that function 
                 to each element of an array, then return a new array
*/

/*
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}
*/

/*
const students = ["Hasan", "Samim", "Harun", "Miltion"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}
*/

/*
const dates = ["2024-1-10","2025-2-20","2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
*/


// ----------------- JS filter() Method ----------------- !

// Explanation
/*
.filter() = creates a new array by filtering out
                elements with a callback
*/

/*
let numbers = [12, 28, 37, 48, 55, 63, 78];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(`The Even Numbers Are: ${evenNums}`);
console.log(`The Odd Numbers Are: ${oddNums}`);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}
*/

/*
const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(`Adults are: ${adults}`);
console.log(`Childrens are: ${children}`);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}
*/

/*
const words = ["apple", "orange", "banana", "dragon", "mango", "watermelon"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(`Under 6 Alphabet Words are: ${shortWords}`);
console.log(`Upper 6 Alphabet Words are: ${longWords}`);

function getShortWords(element){
    return element.length <= 5;
}

function getLongWords(element){
    return element.length > 5;
}
*/


// -------------- JS .reduce() Method -------------- Date: 14.11.24

// Explanation
/*
.reduce() = reduce the elements of an array
            to a single value
*/ 

/*
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`The Sum is: $${total}`);

function sum(accumulator, element){
    return accumulator + element;
}
*/

/*
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(`The Maximum is: $${maximum}`);
console.log(`The Minimum is: $${minimum}`);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
*/


// ----------------- JS Function Expressions ----------------- !

// Explanation
/*
function expressions = a way to define functions as
                        values or variables.

 1. Callbacks in asynchronous operations
 2. Higher-Order Functions
 3. Closures
 4. Event Listeners
 */

// const hello = function(){
//     console.log(`Hello, World!`)
// }
// hello();

// setTimeout(function(){
//     console.log(`Hello, World!`)
// },3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

const cobes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(`Square Numbers: ${squares}`);
console.log(`Cube Numbers: ${cobes}`);
console.log(`Even Numbers: ${evenNums}`);
console.log(`Odd Numbers: ${oddNums}`);
console.log(`Total of Numbers: ${total}`);
