const numBox = document.getElementById("numBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const conversionMess = document.getElementById("conversionMess");


let temp;

function shakeAnimation(message){
    conversionMess.textContent = message;

    conversionMess.classList.add("shake");

    setTimeout(() => {
    conversionMess.classList.remove("shake");
    }, 400);
}




function convert() {
    if (toFahrenheit.checked) {
        temp = Number(numBox.value);
        temp = temp * 9 / 5 + 32;
        shakeAnimation(`${temp.toFixed(1)} °F`);


     }else if (toCelcius.checked) {
        temp = Number(numBox.value);
        temp = (temp - 32) * (5 / 9);
        shakeAnimation(`${temp.toFixed(1)} °C`);
    } else {
        shakeAnimation(`Select a unit!`);
    }
}