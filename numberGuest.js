//const for the varaible cant change
const correctNumber = 3;

// Ask the user to guess
let guess = Number(prompt("Guess a number between 1 and 10:"));

//use a while loop repeat something many times until the user guesses correctly.
while (guess !== correctNumber) {
    if (guess > correctNumber) {
        console.log("Too high!");
    } else {//console the user in put if 1 too high else 4 too low
        console.log("Too low!");
    }
    guess = Number(prompt("Guess a number between 1 and 10:"));
}

console.log("Correct!");
