let age = prompt("Enter your age:");
// let to declare variables and prompt for browser dialog pop up in your scrren.
age = Number(age);

// use if-esle for true and false
if (age < 13) {
  //if the user input 11 so true it means you are a childe.
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
