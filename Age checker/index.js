const userInput = document.getElementById("userInput");
const mainBtn = document.getElementById("myBtn");
const userOutput = document.getElementById("resultOutput");

let age;

mainBtn.onclick = function (){
    
    age = Number(userInput.value);
    if (age >= 100) {
        userOutput.textContent = "too old";  
    } else if (age >= 18) {
        userOutput.textContent = "old enough"; 
    }else if ( age < 0){
        userOutput.textContent = "invalid age bellow 0."; 
    }else{
        userOutput.textContent = "you must 18 to enter to this site";
    }

}

 
