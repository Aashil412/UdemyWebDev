function sum() {
    return arguments.reduce((sum, curr) => sum + curr);
}

function sum1(...nums) {
    return nums.reduce((sum, curr) => sum + curr);
}

function raceResults(gold,silver,...everyone) {
    console.log(`Gold Medal Goes to: ${gold}`);
    console.log(`Silver Medal Goes to: ${silver}`);
    console.log(`thanks to everyone else: ${everyone}`);
}