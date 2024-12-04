
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

/*
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
*/

// ---------------- JS DOM Explained ---------------- Date: 30.11.2024
// Explanation
/*
DOM = DOCUMENT OBJECT MODEL
             Object{} that represents the page you see in the web browser 
             and provides you with an API to interact with it.
            Web browser constructs the DOM when it loads an HTML document,
            and structures all the elements in a tree-like representation.
           JavaScript can access the DOM to dynamically 
           change the content, structure, and style of a web page.
*/

/*
document.title = "My Website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

console.dir(document);
*/
/*
const userName = "rashidCode";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += userName === "" ? `Guest` : userName;
*/


// ------------------- JS ELEMENT SELECTORS ------------------- !
// Explanation
/*
element selectors = Methods used to target and manipulate HTML elements 
                                    They allow you to select one or multiple HTML elements
                                    from the DOM (Document Object Model)

1. document.getElementById()                 // ELEMENT OR NULL
2. document.getElementsClassName()  // HTML COLLECTION
3. document.getElementsByTagName() // HTML COLLECTION
4. document.querySelector()                    // FIRST ELEMENT OR NULL
5. document.querySelectorAll()               // NODELIST
*/

/* 1.
const myHeading = document.getElementById("myHeading");
myHeading.style.backgroundColor = "orange";
myHeading.style.color = "white";
myHeading.style.textAlign = "center";

console.log(myHeading);
*/

/* 2.
const fruits = document.getElementsByClassName("fruits");

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "orange";
});

// fruits[0].style.backgroundColor = "yellow";
// console.log(fruits);
*/
/* 3.
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "orange";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "gold";
}
*/
/* 4.
const element = document.querySelector("ul");

element.style.backgroundColor = "gold";
*/
/*
const foods = document.querySelectorAll("li");

// foods[4].style.backgroundColor = "gold";
foods.forEach(food => {
    food.style.backgroundColor = "gold";
});
*/

// ---------------- JS DOM Navigation ---------------- Date: 01.12.2024
// Explanation
/*
DOM Navigation = The process of navigating through the structure 
                                 of an HTML document using JavaScript.

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/

// ---------- .firstElementChild ----------|
/*
// const element = document.getElementById("fruits");
// const fristChild = element.firstElementChild;
// fristChild.style.backgroundColor = "red";

const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement => {
    const fristChild = ulElement.firstElementChild;
    fristChild.style.backgroundColor = "lightgreen";
});
*/
// ------------- .lastElementChild -------------|
/*
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "red";

const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "lightgreen";
});
*/

// ------------- .nextElementSibling -------------|
/*
const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "green";
*/

// ------------- .previousElementSibling -------------|
/*
const element = document.getElementById("banana");
const previousElement = element.previousElementSibling;
previousElement.style.backgroundColor = "green";
*/

// ------------- .parentElement -------------|
/*
const element = document.getElementById("banana");
const prntElement = element.parentElement;
prntElement.style.backgroundColor = "green";
*/
// ------------- .children -------------|

// const element = document.getElementById("fruits");
// const children = element.children;

// children[1].style.backgroundColor = "green";
/*
const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "green";
});
*/

// ---------------- JS ADD/CHANGE HTML ---------------- !
// Explanation
// ----- STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center"
/*
const newListItem = document.createElement("li");

// ------ STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I Like barger";

newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "tomato";


// ----- STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const apple = document.getElementById("apple");
// document.getElementById("fruits").insertBefore(newListItem, apple);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[2]);


// ----- REMOVE HTML ELEMENT
// document.getElementById("box1").removeChild(newH1);
*/


// ---------------- JS eventListener ---------------- Date: 02.12.2024
// Explanation
/*
eventListener = Listen for specific events to create interactive web pages
                            events: click, mouseover, mouseout
                            .addEventListener(event, callback);
*/

/*
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😘"
}

myBox.addEventListener("click", changeColor);

// Click Effect
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! =>F()😘"
});
// mouseover Effect
myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it😊"
});
// mouseout Effect
myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me ➡️"
});
*/


// --------------------- JS KEY EVENTS ------------------- !
// Explanation
/*
eventListener = Listen for specific events to create interactive web pages
                            events: keydown, keyup
                            document.addEventListener(event, callback);
*/
/*
document.addEventListener("keydown", event => {
    console.log(`key Down = ${event.key}`);
});

document.addEventListener("keyup", event => {
    console.log(`key up = ${event.key}`);
});
*/
/* 
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😍";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😎";
    myBox.style.backgroundColor = "gray";
});

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }

})
*/

// ---------------- JS  HIDE and SHOW HTML ---------------- Date: 03.12.2024
/*
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }

});
*/