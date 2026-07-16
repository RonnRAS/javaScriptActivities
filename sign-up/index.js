// creating an account using methods of ()
// const  = document.getElementById("");
// reusable anim

function createAcc() {

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const pWord = document.getElementById("pWord");



    function showError(input, message) {
        const inputHandler = input.parentElement;
        const errorHandler = inputHandler.querySelector(".errorHandler");
        errorHandler.innerText = message;
        errorHandler.style.visibility = "visible";
        input.style.border = "2px solid red";
        errorHandler.style.color = "red";
    }
    function showSuccess(input) {
        const inputHandler = input.parentElement;
        const errorHandler = inputHandler.querySelector(".errorHandler");
        input.style.border = "2px solid green";
        errorHandler.style.visibility = "hidden";
    }

    function validateInput(input, rules) {
        const value = input.value.trim();

        if (rules.required && value === "") {
            showError(input, `${rules.prop} is required.`);
            return false;
        }
        if (rules.email) {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                showError(email, "Please enter a valid email domain (e.g., @gmail.com).");
                return false;
            }
        }

        if (rules.minLength && value.length < rules.minLength) {
            showError(input, `${rules.prop} must be at least ${rules.minLength} characters long.`);
            return false;
        }

        showSuccess(input);
        return true;
    }

    let valid = true;
    valid &= validateInput(firstName, { prop: "Firstname", required: true, minLength: 2 });
    valid &= validateInput(lastName, { prop: "Lastname", required: true, minLength: 2 });
    valid &= validateInput(email, { prop: "Email", required: true, email: true });
    valid &= validateInput(pWord, { prop: "Password", required: true, minLength: 8 });

}