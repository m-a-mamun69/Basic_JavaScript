
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


// ----------------- JS CallBack Function ----------------- !

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