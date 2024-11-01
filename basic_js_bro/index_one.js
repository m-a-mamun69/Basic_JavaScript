
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


