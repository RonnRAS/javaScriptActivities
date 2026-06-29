
const decrease = document.getElementById("decreaseBtn");
const clear = document.getElementById("clearBtn");
const increase = document.getElementById("increaseBtn");
const label = document.getElementById("main-text");

let count = 0;


decrease.onclick = function (){
    count--;
    label.textContent = count;
}

clear.onclick = function(){
    count = 0

    label.textContent = count;
}

increase.onclick = function (){
    count++;
    label.textContent = count;
}


