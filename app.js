
let recieveBtn = document.querySelectorAll(".recieve-button");
let recieve = document.querySelector(".recieve");
let close = document.querySelector(".closeBtn");

recieveBtn.forEach((i)=>{
    i.addEventListener('click', show);
    function show() {
        recieve.style.display = "block";
}});


close.addEventListener('click', closeBlock);
function closeBlock() {
    recieve.style.display = 'none'
}
