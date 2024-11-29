
// ------------------- JS compound interest calculator ------------------- !

/*
function calculate(){
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }

    const result = principal * Math.pow((1 + rate / 1), 1* years);

    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "BDT"});
}
*/

// ---------------- JS Digital Clock Code---------------- Date: 26.11.2024

/*
function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);
*/


// ---------------- JS Stopwatch Code ---------------- Date: 27.11.2024
/*
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function Start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function Stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function Reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
*/


// ------------------- JS ES6 Modules ------------------- !

// Explanation
/*
ES6 Module = An external file that contains reusable code
             that can be imported into other JavaScript files
             write resusable code for many different apps.
             Can contain variables, classes, functions ... and more
             Introduced as part of ECMAScript 2015 update
*/

/*
import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`Circumference: ${circumference.toFixed(2)}cm`);
console.log(`Area: ${area.toFixed(2)}cm^2`);
console.log(`Volume: ${volume.toFixed(2)}em^3`);
*/


// ---------------- JS Synchronous & Asynchronous ---------------- Date: 28.11.2024
// Explanation
/*
synchronous  = Executes line by line consecutively in a sequential manner 
                            Code that waits for an operation to complete.

asynchronous = Allows multiple operations to be performed 
                              concurrently without waiting. Doesn't block the execution 
                              flow and allows the program to continue.
                              (I/O operations, network requests, fetching data)
                              Handled with: Callbacks, Promises, Async/Await
*/

/*
setTimeout(() => console.log("Task 1"), 3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
*/

/*
function func1(callbacks){
    setTimeout(() => {console.log("Task 1");
                    callbacks()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);
*/

// ---------------- JS Error handling ---------------- Date: 29.11.2024
// Explanation
/*
Error = An Object that is created to represent a problem that occurs
             Occur often with user input or establishing a connection

try { } = Encloses code that might potentially cause an error
catch { } = Catch and handle any thrown Errors from try { }
finally { } = (optional) Always executes. Used mostly for clean up
                    ex. close files, close connections, release resources
*/

/*
try{
    console.log("Hello"); // (x)
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes.");
}

console.log("You have reached the end!");
*/

try{
    const dividend = Number(window.prompt("Enter a Dividend: "));
    const divisor = Number(window.prompt("Enter a Divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");
