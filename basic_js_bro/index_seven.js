

// ---------------- JS NodeList ---------------- Date: 04.12.2024
// Explanation
/*
NodeList = Static collection of HTML elements by (id, class, element)
                    Can be created by using querySelectorAll()
                    Similar to an array, but no (map, filter, reduce) 
                    NodeList won't update to automatically reflect changes.
*/

// let buttons = document.querySelectorAll(".myButton");

// Add HTML/CSS Properties

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
// });

// Click Properties
/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});
*/
// Mouseover or Mouseout
/*
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(204, 88%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(204, 88%, 50%)";
    });
});
*/
// Add an Element
/* 
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButton";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButton");

console.log(buttons);
*/
// Remove an Element
/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButton");
        console.log(buttons);
    });
});
*/

// --------------------- JS classList property ------------------- !
// Explanation
/*
classList = Element property in JavaScript used to interact
                    with an element's list of classes (CSS classes)
                    Allows you to make reusable classes for many elements
                    across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()
*/

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");
// myButton.classList.add("hover");
/*
//  toggle(Remove if present, Add if not)
myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});
*/
// replace(oldClass, newClass) & contains()
/*
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
});
*/
/*
let buttons = document.querySelectorAll(".myButton");

buttons.forEach(button =>  {
    button.classList.add("enabled");
});

buttons.forEach(button =>  {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button =>  {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>  {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😍";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    });
});
*/


// ---------------- JS CALLBACK HELL ---------------- Date: 05.12.2024
// Explanation
/*
Callback Hell = Situation in JavaScript where callbacks 
                           are nested within other callbacks to the
                           degree where the code is difficult to read.
                           Old pattern to handle asynchronous functions.
                           Use Promises + async/await to avoid Callback Hell
*/
/*
function task1(callback){
    setTimeout(() => {
        console.log("Task 1 Complete.");
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2 Complete.");
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3 Complete.");
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4 Complete.");
        callback();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {console.log("All Tasks Complete.");})
        })
    })
});
*/


// ---------------- JS IMAGE SLIDER ---------------- Date: 06.12.2024
// Explanation
/*
This is an image slider program that you can create as a beginner. 
We will be using element selectors to create a nodelist of images to cycle through. 
An image to be displayed will have a class added to their classList that contains display: block. 
You will need at least a few images of your choosing to work with. I recommend image that are roughly the same size.
*/
/*
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    // slides[slideIndex].classList.add("displaySlide");
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
*/


// ---------------- JS PROMISES ---------------- Date: 07.12.2024
// Explanation
/*
Promise = An Object that manages asynchronous operations.
                   Wrap a Promise Object around {asynchronous code}
                   "I promise to return a value"

DO THESE CHORES IN ORDER

1. WALK THE DOG
2. CLEAN THE KITCHEN
3. TAKE OUT THE TRASH
*/

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve("You walk The Dog 🐕");
            }
            else{
                reject("You DIDN'T walk The Dog.");
            }
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You Clean the Kitchen 🧹");
            }
            else{
                reject("You DIDN'T Clean the Kitchen.");
            }
        }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashThakenOut = false;

            if(trashThakenOut){
                resolve("You take out Trash 🗑️");
            }
            else{
                reject("You DIDN'T take out trash.");
            }
        }, 500);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You Finished all the tasks.")})
        .catch(error => console.error(error));

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You Finished all the tasks."));
//     });
// });