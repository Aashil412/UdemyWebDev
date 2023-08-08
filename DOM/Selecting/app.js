const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    console.log(img.src);
}
const squareImages = document.getElementsByClassName('square');
for (let imgs of squareImages) { 
    console.log(img.src);
}

const links = document.querySelectorAll('p a');
for (let l of links) {
    console.log(l.href);
}