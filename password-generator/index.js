

function generatePwd() {
    const passwordLength = document.getElementById("passwordLength").value;
    const lowerCase = document.getElementById("lowerCase");
    const upperCase = document.getElementById("upperCase");
    const numCase = document.getElementById("numCase");
    const symbolCase = document.getElementById("symbolCase");
    const generatedPassowrd = document.getElementById("generatedPassowrd");

    
    function passwordGenerator(passwordLength, lowerCase, upperCase, numCase, symbolCase){

        const lowerCaseChar =  "abcdefghijklmnopqrstuvwxyz";
        const upperCaseChar =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars =  "0123456789";
        const symbolChars =  "!@#$%&*_-+=";

        let allowedChars = "";
        let password = "";

        allowedChars += lowerCase ? lowerCaseChar : "";
        allowedChars += upperCase ? upperCaseChar : "";
        allowedChars += numCase ? numberChars : "";
        allowedChars += symbolCase ? symbolChars : "";

        if (allowedChars.length === 0) {
            return "select atlest one characters!";
        }

        for(let i = 0; i < passwordLength; i++){
            const random = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[random]
        }

        return password;
    }

    const password = passwordGenerator(passwordLength, 
                        lowerCase.checked, 
                        upperCase.checked, 
                        numCase.checked, 
                        symbolCase.checked);

        if (password === "select atlest one characters!") {
                generatedPassowrd.textContent = password;
        } else {
                generatedPassowrd.textContent = `Generated Password: ${password}`;
        }
        


}