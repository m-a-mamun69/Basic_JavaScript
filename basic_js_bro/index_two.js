
// --------------- While Loop  -------------- Date: 6.11.24
/*
// let username = "";

// while(username === "" || username === null){
//     username = window.prompt('Enter your name: ');
// }
// console.log(`Hello ${username}`);


let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter Your userName: ");
    password = window.prompt("Enter Your Password: ");

    if (username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are Logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}
*/


// ------------------- For Loop ------------------ !

/*
let i;

// Increment
// for(i=0; i <= 10; i++){
//     console.log(i);
// }

// Decrement
// for(i=10; i > 0; i--){
//     console.log(i);
// }

// Continue
// for(i=0; i <= 10; i++){
//     if(i==7){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

for(i=0; i <= 10; i++){
    if(i==7){
        break;
    }
    else{
        console.log(i);
    }
}
console.log("Happy New Year.");
*/


// --------------- Number Guessing Game  -------------- Date: 7.11.24

/*
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a Number Between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO Low! Try Again!..");
        }
        else if(guess > answer){
            window.alert("TOO High! Try Again!..");
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}
*/


// ------------------- For Loop ------------------ !


// function happyBirthday(userName, age){
//     console.log("Happy Birthday to You.!");
//     console.log("Happy Birthday to You.!");
//     console.log(`Happy Birthday dear '${userName}'.`);
//     console.log("Happy Birthday to You.");
//     console.log(`You are '${age}' years Old.`);
// }

// // happyBirthday();
// happyBirthday("rCode", 25);

/*
function add(x, y){
    // let result = x + y;
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

// let answer = add(2, 3);
console.log(`The Sum is: ${add(2, 3)}`);
console.log(`The subtract is: ${subtract(5, 3)}`);
console.log(`The multiply is: ${multiply(2, 3)}`);
console.log(`The divide is: ${divide(6, 3)}`);


function isEven(number){
    return number % 2 === 0 ? true : false;
}
console.log(`Is it Even Number: ${isEven(4)}`);


function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(`Is it Valid Email: ${isValidEmail("mamun@gmail.com")}`);
console.log(`Is it Valid Email: ${isValidEmail("mamun.com")}`);
*/



// --------------- Variable Scope  -------------- Date: 8.11.24

/*
// Global Vriable.
let z = "Mamun";

// functionOne()
// functionTwo()
// function functionOne(){
//     // Local Vriable.
//     let x = 5;
//     console.log(`This is Function One Local Variabe "${x}" & Global Variable "${z}"`);
// }

// function functionTwo(){
//     let y = 8;
//     console.log(`This is Function One Local Variabe "${y}" & Global Variable "${z}"`);
// }

functionOne()
functionTwo()
function functionOne(){
    // Local Vriable. ( Local Variable Count First.)
    let z = 'Rashid';
    console.log(`This is Function One Local Variabe "${z}" & Global Variable "${z}"`);
}

function functionTwo(){
    let y = 8;
    console.log(`This is Function One Local Variabe "${y}" & Global Variable "${z}"`);
}
*/


// ------------------- TEMPERATURE CONVERSION ------------------ !

/*
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select A Unit";
    }
}
*/


// --------------- JS Arrays  -------------- Date: 9.11.24

/*
let fruits = ["apple","orange","banana", "coconut"];
// fruits[3] = "coconut";

// fruits.push("coconut");
// fruits.pop("coconut");
// fruits.unshift("mango");
// fruits.shift();

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("banana");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

fruitss = fruits.sort().reverse();
for(let fruit of fruitss){
    console.log(fruit);
}
*/



// --------------- JS 2D ARRAYS  -------------- Date: 10.11.24

/*
const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9],
                ["*",0,"#"]];

// matrix[0][0] = 'X';
// matrix[0][1] = '0';
// matrix[0][2] = 'X';

// matrix[1][0] = '0';
// matrix[1][1] = 'X';
// matrix[1][2] = '0';

// matrix[2][0] = 'X';
// matrix[2][1] = '0';
// matrix[2][2] = 'X';


for (let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}
*/


// ------------------- REST PARAMETERS ------------------ !

/*
// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = 'pizza';
// const food2 = 'hamburger';
// const food3 = 'hotDog';
// const food4 = 'tea';
// const food5 = 'chickenFry'

// // openFridge(food1, food2, food3, food4,food5);
// const foods = getFood(food1, food2, food3, food4,food5);
// console.log(foods);

// For Sum
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,2,5,85,6,95,5,54);
console.log(`Your total is: ${total}`);

// For Average
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const avg = getAverage(85,6,95,5,54);
console.log(`Your Average is: ${avg}`);

// For Strings
function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString('Mr', 'M', 'A', 'MAMUN');
console.log(fullName);
*/


// ------------------- SPREAD OPERATOR ------------------ !


// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// let userName = "RashidCode";
// let letters = [...userName].join("-");

let fruits = ["apply", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]

console.log(foods);
