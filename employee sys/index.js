

function submitEntry (){
    const employeeName = document.getElementById("employeeName").value;
    const employeeAge = document.getElementById("employeeAge").value;
    const employeeSalary = document.getElementById("employeeSalary").value;
    const emmployeeType = document.getElementById("emmployeeType");
    
    const warningMsg = document.getElementById("warningMsg");


    if (
        employeeName.trim() === "" || 
        employeeAge.trim() === "" ||
        employeeSalary.trim() === "" ||
        emmployeeType.value === ""
    ){
        warningMsg.textContent = "please enter a value";
        return;
    }

    if(employeeAge <= 0){
        warningMsg.textContent = "enter a valid age";
        return;
    }else if(employeeAge < 18){
        warningMsg.textContent = "you must be a 18 or above";
        return;
    }else if(employeeSalary <= 0){
        warningMsg.textContent = "enter a valid salary";
        return;
    }

    if(emmployeeType.value === "Manager"){
        const  employee = new Manager (employeeName, employeeAge, employeeSalary, emmployeeType.value);
        employeeData.push(employee);
        display();
    }else if (emmployeeType.value ===  "Software Developer"){
        const employee = new Software (employeeName, employeeAge, employeeSalary, emmployeeType.value);
        employeeData.push(employee);
        display();
    }
    warningMsg.textContent = "Employee registered successfully.";
    
    const regisForom = document.getElementById("regisForom").reset();
}

const employeeData = [];
console.log(employeeData);


class employee {
    constructor (employeeName, employeeAge, employeeSalary, emmployeeType){
            this.employeeName = employeeName;
            this.employeeAge = Number(employeeAge);
            this.employeeSalary = Number(employeeSalary);
            this.emmployeeType = emmployeeType;
    }

    
}

class Manager extends employee {
    constructor(employeeName, employeeAge, employeeSalary, emmployeeType){
    super(employeeName, employeeAge, employeeSalary, emmployeeType);
    }
}

class Software extends employee {
    constructor(employeeName, employeeAge, employeeSalary, emmployeeType){
    super(employeeName, employeeAge, employeeSalary, emmployeeType);
    }
}

function display (){
    const displayEmployee = document.getElementById("displayEmployee");
    

        
    displayEmployee.innerHTML += `<h1">Registered Employee</h1>`;

    employeeData.forEach(employee => {
        displayEmployee.innerHTML += `
            <p>
                
                <strong>Name:</strong> ${employee.employeeName}<br>
                <strong>Age:</strong> ${employee.employeeAge}<br>
                <strong>Salary:</strong> ${employee.employeeSalary}<br>
                <strong>Type:</strong> ${employee.emmployeeType}
            </p>
            <hr>
        `;
    });

}
