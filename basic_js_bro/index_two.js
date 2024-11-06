
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