const button = document.querySelector("button");
button.addEventListener("click", () => {
    const ranColor = randomColor();
  document.body.style.backgroundColor = ranColor;
  document.querySelector('h1').innerText = ranColor  ;
});
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}