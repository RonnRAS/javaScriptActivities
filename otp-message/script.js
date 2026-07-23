//const  = document.getElementById("");
// verify Form
const emailVerifyForm = document.getElementById("emailVerifyForm"),
    otpForm = document.getElementById("otpForm");;

otpForm.style.display = "none";

    //validation message
function showError(input, isValid, message) {
    const inputHandler = input.parentElement;
    const errorHandler = inputHandler.querySelector(".errorHandler");
    errorHandler.textContent = isValid ? "" : message;
    errorHandler.style.color = "red";
}

    //check the email if is coorect
function checkInputs(input, rules){
    const value = input.value.trim();
    if (rules.required && value === "") {
        showError(input, false, `${rules.properties} is required!`);
        return false;
    }

    if (rules.email) {
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) {
            showError(input, false, "Please enter a valid email domain (e.g., @gmail.com).");
            return false;
        }
    }
    
    showError(input, true, "");
    return true;
}

    //validates the code 
function validatesOTP(){
    
    const otpInputs = document.querySelectorAll(".otp-input");
    const otpShowError = document.querySelector(".otpForm .errorHandler");

    let Code = "";

    for (const input of otpInputs) {
        if (input.value.trim() == "") {
            otpShowError.textContent = "OTP is required.";
            return false;


        }
        Code += Number(input.value);
    }
    if (!/^\d{6}$/.test(Code)) {
        otpShowError.textContent = "OTP must contain only numbers.";
        return false;
    }
    console.log("Entered:", Code);
    if (Number(Code) !== Number(otpCode)) {
        otpShowError.textContent = "Invalid OTP. Please try again.";
        return false;
    }
    // if (Code === otpCode ){
    //    
    // } receive the code and validates if its correct
    // showError(input, false, "Invalid OTP. Please try again.");
    
    otpShowError.textContent = "";
    return Code;
}

class Email {
    constructor (email){
        this.email = email;
    }
}

function checksEmail() {
    const email = document.getElementById("email");

    let valid =  true;

    valid &= checkInputs(email, { properties: "Email", required: true, email: true, emailExists: true });


        if(!valid){
            otpForm.style.display = "none";
            return;
        }


    emailVerifyForm.style.display = "none";
    otpForm.style.display = "block";
        
        const throwEmail = new Email (
            email.value,
        );
    // creeating a rondom 6 numbers
    otpCode = Math.floor(100000 + Math.random() * 900000);
    console.log(otpCode);

        userEmail.push(throwEmail);
        emailVerifyForm.reset();
        

}

const userEmail = [];
console.log(userEmail);



// otp inputs
const otpBox = document.querySelectorAll(".otp-box input");

otpBox.forEach((input, index) =>{
    input.addEventListener("input", (e) => {
        input.value = e.target.value.replace(/[^0-9]/g, '');
        if (input.value && index < otpBox.length - 1) {
            otpBox[index + 1].focus();
        }
    });
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            otpBox[index - 1].focus();
        }
    });
    
    input.addEventListener("paste", (e) => {
        let paste = e.clipboardData.getData("text").replace(/[^0-9]/g, '');
        if (paste.length === 6) {
            otpBox.forEach((inp, i) => inp.value = paste[i]);
        }
    });
});


function submitCode(){
    const Code = validatesOTP();
    if (!Code) return;

    showSuccessToast("OTP GOOD NIICE!!!");
    otpForm.reset();
    console.log(Code);
}

// success message
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

let otpCode = "";
