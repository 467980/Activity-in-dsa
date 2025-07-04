let score = prompt("Enter your score:");
//let for variable and prompt agian for browser dialog
score = Number(score);

if (score >= 90) {//use if here to one condition
    console.log("Your grade is: Excellent.");
} else if (score >= 80) {//else if of multiple condition
    console.log("Your grade is: Good.");
} else if (score >= 70) {//so the user input use (89) false next condition is true its stop the condition
    console.log("Your grade is: Fair.");
} else {
    console.log("Your grade is: Needs Improvement.");
}//in else when all off that false it gonna direct here if no else put here there is no out put goons show
