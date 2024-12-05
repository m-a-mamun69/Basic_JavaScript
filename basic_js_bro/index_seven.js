

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
