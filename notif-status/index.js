

function createAcc() {
    const firstName = document.getElementById("firstName");

    function showError(input, message) {
        const inputHandler = input.parentElement;
        const errorHandler = inputHandler.querySelector(".errorHandler");
        errorHandler.innerText = message;
        errorHandler.style.visibility = "visible";
        errorHandler.style.color = "red";
    }
    function showSuccess(input) {
        const inputHandler = input.parentElement;
        const errorHandler = inputHandler.querySelector(".errorHandler");
        errorHandler.innerText = "";
        errorHandler.style.visibility = "hidden";
    }

    function validateInput(input, rules) {
        const value = input.value.trim();

        if (rules.required && value === "") {
            showError(input, `${rules.prop} is required.`);
            return false;
        }

        showSuccess(input);
        return true;
    }

    function validateInput(input, rules) {
        const value = input.value.trim();

        if (rules.required && value === "") {
            showError(input, `${rules.prop} is required.`);
            return false;
        }

        showSuccess(input);
        return true;
    }
    let valid = true;
    valid = valid && validateInput(firstName, { prop: "Firstname", required: true, minLength: 2 });

    if (!valid) {
        return;
    }


    try {

        const userInput = new User(
            firstName.value.trim());

        userData.push(userInput);
        alert("success");
    } catch (error) {
        alert("error");
    }

}




class User {
    constructor(firstName) {
        this.firstName = firstName;
    }


}
const userData = [];
console.log(userData);



//function displayStatus(crea) {
//  const status = document.getElementById("status");
//
//  for (let userDisplay of userData) {
//      if () {
//          status.innerHTML += `
//      <i class="bi bi-check-circle-fill"></i>
//      <p>success alert!</p>
//      `;
//      }else[]
//
//
//  }
//}