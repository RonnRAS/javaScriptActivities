const password = document.getElementById("userPw");
const seePw = document.getElementById("seePw");

seePw.addEventListener("change", function () {
    if (seePw.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});


function showError(input, isValid, message) {
    const inputHandler = input.parentElement;
    const errorHandler = inputHandler.querySelector(".errorHandler");
    errorHandler.textContent = isValid ? "" : message;
    errorHandler.style.color = "red";
}




//const  = document.getElementById("");
function regisAcc() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const radioSex = document.querySelector('input[name="userSex"]:checked');
    const email = document.getElementById("email");
    const radioType = document.querySelector('input[name="userType"]:checked');
    const password = document.getElementById("userPw");


    function checkInput(input, rules) {

        const value = input.value.trim();

        if (rules.required && value === "") {
            showError(input, false, `${rules.properties} is required!`);
            return false;
        }
        if (rules.lettersOnly && !/^[A-Za-z\s]+$/.test(value)) {
            showError(input, false, `${rules.properties} must contain letters only.`);
            return false;
        }
        if (rules.email) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                showError(input, false, "Please enter a valid email domain (e.g., @gmail.com).");
                return false;
            }
        }

        showError(input, true, "");
        return true;
    }

    let valid = true;

    valid &= checkInput(firstName, { properties: "Firstname", required: true, minLength: 2, lettersOnly: true });
    valid &= checkInput(lastName, { properties: "Lastname", required: true, minLength: 2, lettersOnly: true });
    valid &= checkInput(email, { properties: "Email", required: true, email: true });
    valid &= checkInput(password, { properties: "Password", required: true, minLength: 8, upperCase: true });


}