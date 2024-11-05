
// ------------ Control Statements --------------- !

// ------ IF Statements -------------- Date: 1.11.24
/*
let age = 15;

if(age >= 18){
    console.log("You are old enough to enter this Website.")
}
else{
    console.log("You are Under Age for This Website.")
}
*/

/*
let time = 9;

if(time < 12){
    console.log('Good Morning..!')
}
else{
    console.log('Good Afternoon..!')
}
*/

/*
let isStudent = true;

if(isStudent){
    console.log("You are A Student.")
}
else{
    console.log("You are Not A Student.")
}
*/

/*
let age = 18;
let hasLicense = true;

if(age >= 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license.");
    }
    else{
        console.log("You do not have your license yet!.");
    }
}
else{
    console.log("You must be 16+ to have a license.");
}
*/


/*
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 18 & age < 100){
        resultElement.textContent = `You are old enough to enter this site.`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else if(age >= 100){
        resultElement.textContent = `You are TOO old to enter this Site.`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. you were just born.`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this Site.`;
    }
}
*/


// --------------- Checked Property -------------- Date: 2.11.24

/*
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed`;
    }
    else{
        subResult.textContent = `You are not  Subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with VISA.`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard.`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal.`;
    }
    else{
        paymentResult.textContent = `You must Select a Payment type.`;
    }
}
*/


// --------------- TERNARY OPERATOR ---------------- !

/*
let age = 19;
let message = age >= 18 ? 'You are an Adult.' : 'You are a Minor.';
console.log(message);

let time = 9;
let greeting = time < 12 ? 'Good Morning' : 'Good Afternoon.';
console.log(greeting);

let isStudent = true;
let message = isStudent ? 'You are a Student' : 'You are NOT a Student';
console.log(message);

let purchaseAmount = 179;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);
*/


// --------------- JS SWITCHES  -------------- Date: 3.11.24

/*
let tesScore = 86;
let letterGrade;

switch(true){
    case tesScore >= 90:
        letterGrade = "A"
        break;
    case tesScore >= 80:
        letterGrade = "B"
        break;
    case tesScore >= 70:
        letterGrade = "C"
        break;
    case tesScore >= 50:
        letterGrade = "D"
        break;
    default:
        letterGrade = "F"
}

console.log(`The Letter Grade is: ${letterGrade}`);
*/


// --------------- TERNARY OPERATOR ---------------- !

/*
let userName = "Nasurulla";
let output;
// let result = userName.startsWith(" ")
// let result = userName.endsWith(" ")
let result = userName.includes(" ")

// output = userName.charAt(1);
// output = userName.indexOf('u');
// output = userName.lastIndexOf('u');
// output = userName.length;
// output = userName.trim();
// output = userName.toUpperCase();
// output = userName.toLowerCase();
// output = userName.repeat(2);

if(result){
    console.log("Your username can't include ' ' ");
}
else{
    console.log(userName);
}

// console.log(output);
*/


// --------------- STRING SLICING  -------------- Date: 4.11.24

/*
// const fullName = 'mCode mamun';
const email = 'Mamun@gmail.com';

// let firstName = fullName.slice(0, 2);
// let lastName = fullName.slice(4, 9);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);
*/


// --------------- JS METHOD CHAINING ---------------- !


// ------------- NO Method Chaining ------------!

/*
let userName = window.prompt("Enter Your UserName: ");
// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter + extraChars;

// --------------- Method Chaining --------------!
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase()

console.log(userName);
*/


// --------------- LOGICAL OPERATORS  -------------- Date: 5.11.24

/*
const temp = -25;

// if(temp > 0 && temp <= 35){
//     console.log("The weather is GOOD.");
// }
// else{
//     console.log("The weather is BAD.");
// }

if(temp <= 0 || temp > 35){
    console.log("The weather is BAD.");
}
else{
    console.log("The weather is GOOD.");
}

const isSunny = true;

if( !isSunny ){
    console.log("It is Cloudy.")
}
else{
    console.log("It is Sunny.")
}
*/


// -------------  STRICT EQUALITY ------------!


const PI = 3.14;

// if(PI === 3.14){
//     console.log("Thst is PI.");
// }
// else{
//     console.log("Thst is NOT PI.");
// }

if(PI !== '3.14'){
    console.log("Thst is NOT PI.");
}
else{
    console.log("Thst is PI.");
}