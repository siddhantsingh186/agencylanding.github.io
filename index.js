function validateFirstName(){
    let firstName = document.getElementById("firstName").value;
    let firstNameRegex = /^\S[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)\S$/;
    if (firstName === "") {
        document.querySelector(".user-box:nth-child(1) .errorBox").textContent = "First name should not be empty";
        return false;
    }
    else{
        if(!firstNameRegex.test(firstName)){
            document.querySelector(".user-box:nth-child(1) .errorBox").textContent = "Enter a valid first name";
            return false;
        }
        else{
            document.querySelector(".user-box:nth-child(1) .errorBox").textContent = "";
            return true;
        }
    }
}

function validateLastName(){
    let lastName = document.getElementById("lastName").value;
    let lastNameRegex = /^\S[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)\S$/;
    if(lastName === ""){
        return true;
    }
    else{
        if(!lastNameRegex.test(lastName)){
            document.querySelector(".user-box:nth-child(2) .errorBox").textContent = "Enter a valid last name";
            return false;
        }
        else{
            document.querySelector(".user-box:nth-child(2) .errorBox").textContent = "";
            return true;
        }
    }
}

function validateEmail(){
    let email = document.getElementById("email").value;
    if (email === "") {
        document.querySelector(".user-box:nth-child(3) .errorBox").textContent = "Email should not be empty";
        return false;
    } else {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email)) {
            document.querySelector(".user-box:nth-child(3) .errorBox").textContent = "Enter a valid email";
            return false;
        }
        else{
            document.querySelector(".user-box:nth-child(3) .errorBox").textContent = "";
            return true;
        }
    }
}

function validateDOB(){
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        document.querySelector(".user-box:nth-child(4) .errorBox").textContent = "Date of birth should not be empty";
        return false;
    }
    else{
        dob = new Date(dob);
        let todaysDate = new Date();
        let age = todaysDate.getFullYear() - dob.getFullYear();
        let monthGap = todaysDate.getMonth() - dob.getMonth();
        if (monthGap < 0 || (monthGap === 0 && todaysDate.getDate() < dob.getDate())) {
            age--;
        }
        if(age < 18){
            document.querySelector(".user-box:nth-child(4) .errorBox").textContent = "You must be 18 years old to register";
            return false;
        }
        else{
            document.querySelector(".user-box:nth-child(4) .errorBox").textContent = "";
            return true;
        }
    }
}

function validatePassword(){
    let password = document.getElementById("password").value;
    let passwordRegex = /(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/;
    if(password === ""){
        document.querySelector(".user-box:nth-child(5) .errorBox").textContent = "Password should not be empty";
        return false;
    }
    else{
        if (password.length < 8 || !passwordRegex.test(password)) {
            document.querySelector(".user-box:nth-child(5) .errorBox").textContent = "Password should be at least 8 characters long and should contain at least one uppercase letter and one special character";
            return false;
        }
        else{
            document.querySelector(".user-box:nth-child(5) .errorBox").textContent = "";
            return true;
        }
    }
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(confirmPassword === ""){
        document.querySelector(".user-box:nth-child(6) .errorBox").textContent = "Confirm password should not be empty";
        return false;
    }
    else{
        if (password !== confirmPassword) {
            document.querySelector(".user-box:nth-child(6) .errorBox").textContent = "Passwords do not match";
            return false;
        }
        else{
            document.querySelector(".user-box:nth-child(6) .errorBox").textContent = "";
            return true;
        }
    }
}

function submitForm(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (firstName === "" || lastName === "" || email === "" || dob === "" || password === "" || confirmPassword === "") {
      alert("Please fill out all the fields");
    } else {
        if(!validateFirstName() || !validateLastName() || !validateEmail() || !validateDOB() || !validatePassword() || !validateConfirmPassword()){
            alert("Please fill out all the fields correctly");
        }
        else{
            let formSubmissions = localStorage.getItem("formSubmissions") ? JSON.parse(localStorage.getItem("formSubmissions")) : [];

            for(var i = 0; i < formSubmissions.length; i++){
                if(formSubmissions[i].email === email){
                    alert("User email already exists");
                    return false;
                }
            }
            formSubmissions.push({email: email, password: password});
            localStorage.setItem("formSubmissions", JSON.stringify(formSubmissions));
            alert("Form submitted successfully");
            window.location.href = 'signup.html';
        }
    }
}
