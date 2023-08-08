// const subreddits = ['1', '2', '3', '4'];

// for (let t of subreddits) {
//     console.log(t); 
// }

// for (let char of "hello world") {
//     console.log(char);
// }
const testScores = {
    ray: 80,
    kim: 60,
    john: 100,
}
// for (let i in testScores) {
//     console.log(i + " " + testScores[i]);
// }
let sum = 0;
for (let p of Object.values(testScores)) {
    sum += p;
}
console.log(sum);