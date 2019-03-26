const recieveBtn = document.getElementById("btn");
let recieve = document.querySelector(".recieve");
let close = document.querySelector(".closeBtn");


recieveBtn.addEventListener('click', show);
function show() {
    recieve.style.display = "block"
}

close.addEventListener('click', closeBlock);
function closeBlock() {
    recieve.style.display = 'none'
}