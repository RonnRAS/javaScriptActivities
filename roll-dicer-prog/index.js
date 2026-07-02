

function mainRoller(){
    const numToRoll = document.getElementById("numToRoll").value;
    const numResults = document.getElementById("numResults");
    const diceResults = document.getElementById("diceResults");

    const values = [];
    const dice = [];

    for (let i = 0; i < numToRoll; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        dice.push(`<img src="dice_image/${value}.png" alt="${value}">`);
    }
    numResults.textContent = `dice : ${values.join(', ')}`;
    diceResults.innerHTML = dice.join('');

}

    

