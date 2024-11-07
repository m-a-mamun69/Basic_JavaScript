
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

