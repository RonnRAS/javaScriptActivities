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
    const male = document.getElementById("male");
    const email = document.getElementById("email");
    const radioType = document.querySelector('input[name="userType"]:checked');
    const admin = document.getElementById("admin");
    const password = document.getElementById("userPw");



    function checkInput(input, rules) {
        if (rules.radio) {
            if (!rules.selected) {
                showError(input, false, `${rules.properties} select one value`);
                return false;
            }
            showError(input, true, "");
            return true;
        }

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

        if (rules.minLength && value.length < rules.minLength) {
            showError(input, false, `${rules.properties} must be at least ${rules.minLength} characters long.`);
            return false;
        }

        if (rules.upperCase) {
            if (!/[A-Z]/.test(value)) {
                showError(input, false, "Password must contain at least one uppercase letter.");
                return false;
            }
        }

        if (rules.haveNum) {
            if (!/[0-9]/.test(value)) {
                showError(input, false, "At least one number(0-9)");
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
    valid &= checkInput(password, { properties: "Password", required: true, minLength: 8, upperCase: true, haveNum: true });

    valid &= checkInput(male, { properties: "Sex", required: true, radio: true, selected: radioSex });
    valid &= checkInput(admin, { properties: "Type", required: true, radio: true, selected: radioType });

    try {
        if (!valid) {
            return;
        }


        const throwData = new User(
            firstName.value,
            lastName.value,
            radioSex.value,
            email.value,
            radioType.value,
            password.value
        );
        userData.push(throwData);
        const regisForm = document.getElementById("regis-form").reset();
        showSuccessToast("Account registered successfully!");
    }
    catch (error) {
        alert("error");
    }

}

class User {
    constructor(firstName, lastName, radioSex, email, radioType, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.radioSex = radioSex;
        this.email = email;
        this.radioType = radioType;
        this.password = password;
    }
}

const userData = [];
console.log(userData);


function showSuccessToast(message, duration = 3000) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `✅ ${message}`;
    document.body.appendChild(toast);

    // Trigger slide-in
    requestAnimationFrame(() => toast.classList.add("show"));

    // Auto-remove after duration
    setTimeout(() => {
        toast.classList.remove("show");
        toast.addEventListener("transitionend", () => toast.remove());
    }, duration);
}