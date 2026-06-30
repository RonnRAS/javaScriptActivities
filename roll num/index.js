const textLabel = document.getElementById("dieFace");
const textLabel2 = document.getElementById("dieFace2");
const textLabel3 = document.getElementById("dieFace3");
const mainBtn = document.getElementById("mainBtn");

const min = 1;
const max = 6;
let random; 
let random2; 
let random3; 

mainBtn.onclick = function(){
    random = Math.floor(Math.random() * max) + min; 
    random2 = Math.floor(Math.random() * max) + min; 
    random3 = Math.floor(Math.random() * max) + min; 

    textLabel.textContent = random;
    textLabel2.textContent = random2;
    textLabel3.textContent = random3;
}