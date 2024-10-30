// console.log(`Hello`);
// console.log(`I Like Pizza!`);

// window.alert('This is an Alart.')
// window.alert('I Like Pizza.')

// document.getElementById('myH1').textContent = 'Hello, World!,'
// document.getElementById('myP1').textContent = 'This is M A Mamun,'

/*
// ------ Number -------------- Date: 28.10.24

let age = 25;
let price = 10.99;
let gpa = 2.80;

console.log(typeof(gpa))
console.log(`Your are a ${age} Year Old.`);
console.log(`T-Shirt Price is ${price}`);
console.log(`Your GPA is ${gpa}`);
*/


/*
// ------ String -------------- Same

let firstName = "Al-Mamun";
let favColor = "Gray";
let email = "mamun69@gmail.com";

console.log(typeof(email))
console.log(`Your name is ${firstName} Year Old.`);
console.log(`You Like  ${favColor}`);
console.log(`Your Email is ${email}`);
*/


/*
// ------ Booleans -------------- Same

let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof(forSale))
console.log(`Are You Online? ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
*/


/*
// ------ All Mixed Up -------------- Same
let fullName = "Al-Mamun";
let age = 25;
let isStudent = false;
document.getElementById('myP1').textContent = `Your name is: ${fullName}`;
document.getElementById('myP2').textContent = `Your are a ${age} Year Old.`;
document.getElementById('myP3').textContent = `Enrolled: ${isStudent}`;
*/


/*
// ------ ARITHMETIC OPERATORS -------------- Date: 29.10.24
// let students = 31;

// students = students + 1
// students = students - 1
// students = students * 2
// students = students / 2
// students = students ** 2
// let extrastudents = students % 3

//---- Assignment Operators ----- !

// students += 1
// students -= 1
// students *= 2
// students /= 2
// students **= 2
// students %= 2

//---- Increment/Decrement ----- !

// students++;
// students--;

// ------ Operator Precedence -------------- !


    1. Parenthesis ()
    2. Exponents
    3. Multipication & Division & Modulus
    4. Additions & Subtractions


// let result = 1 + 2 * 3 + 4 ** 2
// let result = 12 % 5 + 8 / 2
// let result = 6 / 2 ** (2 + 5)

// console.log(`Enrolled Students: ${result}`);
*/


// ------ User Input -------------- !

/*
let username;
// username = window.prompt("What`s your username? ");

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH4").textContent = `Hello: ${username}`
}

// console.log(username);
*/


// ------ TYPE CONVERSION -------------- Date: 30.10.24
/*
// let age = window.prompt("How Old are You?");
// age = Number(age);
// age += 1;

// let x = "23";
// let y = "Pizza";
// let z = "Pizza";

let x;
let y;
let z;

 x = Number(x);
 y = String(y);
 z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/


// ------ JS Constants -------------- !

const PI = 3.1416;
let radius;
let circumference;

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);

// circumference = 2 * pi * radius;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH2").textContent = circumference + "cm";
}

// console.log(circumference);


// For Comment Single Line 

/*
    There is A 
    Multiline 
    Comment
*/


