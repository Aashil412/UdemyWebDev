try {
    hello.toUpperCase();
}
catch {
    console.log("Error");
}

function yell(msg) {
    try {
        msg.toUpperCase();
        msg.toUpperCase();
        msg.toUpperCase();
    }
    catch (e){
        console.log(e);
        console.log("Please pass a string");
    }
    }
   