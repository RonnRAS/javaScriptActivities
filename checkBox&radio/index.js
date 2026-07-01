const userCheckBox = document.getElementById("checkBox");
const userMale = document.getElementById("userSex");
const userFemale = document.getElementById("userSex");
const userSubmit = document.getElementById("userSubmit");
const userOutputSex = document.getElementById("userOutputSex");
const userOutput= document.getElementById("userOutput");


userSubmit.onclick = function(){
    if (userCheckBox.checked) {
        userOutput.textContent = "follower ka qpal";
    }else{
        userOutput.textContent = "you are not qpal";
    }
}




