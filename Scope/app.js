// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();
// console.log(bird);

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!';
// }
// console.log(radius);
// console.log(msg);

// for (let i = 0; i < 5; i++){
//     var msg = "ASKASKDKDK";
//     console.log(msg);
// }
// console.log(msg);
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us, ${hero}`);
            }
        }
        inner();
    }
    cryForHelp();
} 