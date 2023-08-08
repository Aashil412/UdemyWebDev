function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
// singSong()
// singSong()
// singSong()
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstname} ${lastName[0]}.`);
}

function repeat(str, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str;
    }  
    console.log(result);
}
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') return false; 
    return x + y;
}