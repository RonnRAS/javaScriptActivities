const textLabel = document.getElementById("dieFace");
const mainBtn = document.getElementById("mainBtn");

const min = 1;
const max = 6;
let random; 

mainBtn.onclick = function(){
    random = Math.floor(Math.random() * max) + min; 

    textLabel.textContent = random;
}