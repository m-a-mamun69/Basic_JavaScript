
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


// --------------- Variable Scope  -------------- Date: 8.11.24


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

