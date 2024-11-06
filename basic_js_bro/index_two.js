
// --------------- LOGICAL OPERATORS  -------------- Date: 5.11.24

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