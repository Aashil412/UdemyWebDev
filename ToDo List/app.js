let arr = []; 
let userInput = prompt("What would you like to do?");
console.log("hii");
while (userInput !== 'quit' && userInput !== 'q') {
    if (userInput === 'new') {
        const newInput = prompt("What would you like to add?");
        arr.push(newInput);
    }
    else if (userInput === 'list') {
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i}: ${arr[i]}`);
        }
    }
    else if (userInput === 'delete' && arr.length > 0) {
        for (let e in arr) {
            console.log(e);
        }
        let input = parseInt(prompt("What would you like to delete?"));
        while (Number.isNaN(input)) {
            input = parseInt(prompt("What would you like to delete?"));
        }
        if (input <= arr.length) {
            arr.splice(input,1);
        }

    }
        userInput = prompt("What would you like to do?");
}
console.log('quit');