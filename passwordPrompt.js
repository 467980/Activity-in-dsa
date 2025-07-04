// const again to cant change the varaible set correct password
const correctPassword = "mySecret123";

// Variable store user input
let password;

// Keep asking until correct
do {
  password = prompt("Enter your password:");

  if (password !== correctPassword) {
    console.log("Incorrect, try again.");
  }
} while (password !== correctPassword);
//asking the user until the password correct or there is limmit iys gonna stop asking
console.log("Access granted.");
