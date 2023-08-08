// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// const Secret = "BabyHippo";
// let guess = prompt("Eneter the secret code...");
// while (guess !== Secret) {
//     guess = prompt("Eneter the secret code...");
// }
// console.log("Congrats");
// let input = prompt("Hey, say something!");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("Ok you win");


let max = parseInt(prompt("Enter the max number"));
while (!max) {
    max = parseInt(prompt("Enter a valid number"));
}
let ans = Math.floor(Math.random()*max)+1;
let guess = prompt("Enter your guess") ;
let attempts = 1;
while (parseInt(guess) !== ans) {
    if (guess === 'q') {
        break;   
    }
    guess = parseInt(guess);
    if (guess > ans) {
        guess = (prompt("Guess is too high"));
        attempts++;
    }
    else if (guess < ans) {
        guess = (prompt("Guess is too low"));
        attempts++;
    }
    else {
        guess = (prompt("Invalid"));
    }
}
