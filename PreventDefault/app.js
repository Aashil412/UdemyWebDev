const form = document.querySelector("#shelterForm");
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
    const newLi = document.createElement('li');
    newLi.innerText = input.value;
    list.append(newLi);
    input.value = '';2
});