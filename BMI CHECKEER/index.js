
const userDataGlobal = [];

class BMI {
    constructor(firstName, lastName, age, height, weight){
        this.firstName = 
        firstName.charAt(0).toUpperCase() +
        firstName.slice(1).toLowerCase();
        this.lastName = lastName;
        this.age = age;
        this.height = Number(height);
        this.weight = Number(weight);
        this.userBmi = this.calculation().toFixed(2);
    }
    calculation (){
        const heightInMeters = this.height / 100;
        return this.weight / (heightInMeters * heightInMeters);
    }

    massIndex (){
        return this.userBmi < 18.5 ? 'Under Weight'
        : this.userBmi < 25 ? 'Normal Weight'
        : this.userBmi < 30 ? 'Over Weight'
        : 'obese'; 
    }

}


function submitForm(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const warningMsg = document.getElementById("warningMsg");

    if(
    firstName === "" ||
    lastName === "" ||
    age === "" ||
    height === "" ||
    weight === "" 
    ){
        warningMsg.textContent = "Please, Enter a valid value";
        return;
    }else if (age < 0 || height < 0 || weight < 0){
        warningMsg.textContent = "Age, height, and weight must be greater than 0.";
        return;
    }

    const userData = new BMI (
        firstName,
        lastName,
        age,
        height,
        weight
    );

    userDataGlobal.push(userData);

    toDisplay ();

    console.log(userData);
}


function toDisplay (){
    const bmiResult = document.getElementById("bmiResult");

    for(let user of userDataGlobal){
            bmiResult.innerHTML += `
            <p>${user.firstName}, your BMI is ${user.userBmi}</p>
            <p>your Category, ${user.massIndex()}</p>
        `;
    }

        
}