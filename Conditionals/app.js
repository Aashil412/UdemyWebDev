// console.log("BEFORE CONDITIONAL");
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5!!!");
//     console.log(random);
// }
// if (random >= 0.5) {
  // console.log("Your number is greater or equal to 0.5!!!");
//     console.log(random);
// }
// console.log("AFTER CONDITIONAL");


// const dayOfWeek = prompt('Enter a day').toLowerCase();
// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I hate Mondays!");
// }
// else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS");
// }
// else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, escpecially after work!");
// }
// else {
//     console.log("MEH")
// }

// const age = 8;
// if (age < 5) {
//     console.log("You are a baby. you get in for free");
// }
// else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20");
// }else{
//console.log("You are a senior. You pay $10")
//}

const password = prompt("please enter a new password");
if (password.length >= 6) {
    console.log("Long enough password");
    if (password.indexOf(' ') ===-1) {
        console.log("Valid Password");
    }
    else {
        console.log("Password cannot contain spaces!");
    }
}
else {
    console.log("Password too short! must be 6+ characters");
}
