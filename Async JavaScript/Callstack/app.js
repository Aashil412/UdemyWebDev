const multipy = (x, y) => x * y;
const square = (num) => multipy(num,num);
const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

console.log("Sending request to server!");
setTimeout(() => {
    console.log("Here is your data from your server...");    
}, 3000);
console.log("I am at the end of the file!");