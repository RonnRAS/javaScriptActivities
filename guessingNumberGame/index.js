
let max = 100;
let min = 1;

let userNum = document.getElementById("userNum");
const submitAns = document.getElementById("guessNumSubmit");
const guessStatus = document.getElementById("guessStatus");

const headTitle = document.getElementById("headTitle");
headTitle.textContent = `I'm thinking of a number between ${min} and ${max}. Can you guess it?`;

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);


let attempt = 0;

function shakeAnimation(message) {
    guessStatus.textContent = message;

    guessStatus.classList.remove("shake");

    setTimeout(() => {
        guessStatus.classList.add("shake");
    }, 4);
}


submitAns.onclick = function () {

    const guess = Number(userNum.value);

    if (isNaN(guess)) {
        shakeAnimation("Please, Enter a valid Number!");
    } else if (guess < min || guess > max) {

        shakeAnimation("Please, Enter a valid Number!");
        userNum.value = " ";
        userNum.focus();
    } else {
        attempt++;
        if (guess < randomNum) {
            shakeAnimation("Too low");
            userNum.value = " ";
            userNum.focus();
        } else if (guess > randomNum) {
            shakeAnimation("Too high");
            userNum.value = " ";
            userNum.focus();
        } else {
            window.alert(`Correct Answer!, The answer is ${randomNum}. It took you ${attempt} attempts.`);
        }
    }

}








