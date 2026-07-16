const changePw = document.getElementById("changePw");
const seePw = document.getElementById("seePw");

seePw.addEventListener("change", function () {
    if (seePw.checked) {
        changePw.type = "text";
    } else {
        changePw.type = "password";
    }
});

function newPass() {
    const changePw = document.getElementById("changePw").value;

    //validations
    const pwRequired = document.getElementById("pwRequired");
    const pwLength = document.getElementById("pwLength");
    const pwUpper = document.getElementById("pwUpper");
    const pwSpecial = document.getElementById("pwSpecial");
    const pwNum = document.getElementById("pwNum");

    function showError(errorElement, isvalid) {
        errorElement.style.color = isvalid ? "green" : "red";
    }

    showError(pwRequired, changePw.trim() !== "");
    showError(pwLength, changePw.length >= 8);
    showError(pwUpper, /[A-Z]/.test(changePw));
    showError(pwSpecial, /[!@#$%^&&*]/.test(changePw));
    showError(pwNum, /[0-9]/.test(changePw));


}