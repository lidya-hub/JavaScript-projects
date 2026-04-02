const countLabel =document.getElementById("countLabel");
const decreaseButton = document.getElementById("decreaseBtn");
const increaseButton = document.getElementById("increaseBtn");
const resetButton = document.getElementById("resetBtn");
let count = 0;




increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}


decreaseButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}



resetButton.onclick = function(){
    count=0;
    countLabel.textContent = count;
}