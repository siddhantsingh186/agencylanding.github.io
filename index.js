function validateFirstName(){
    var firstName = document.getElementById("firstname").value;
    if (firstName == "") {
      document.getElementById("errorfirstname").innerHTML = "First name should not be empty";
    }
    else{
        document.getElementById("errorfirstname").innerHTML = "";
    }
}

function validateLastName(){
    var lastName = document.getElementById("lastname").value;
    if(lastName == ""){
        document.getElementById("errorlastname").innerHTML = "Last name should not be empty";
    }
    else{
        document.getElementById("errorlastname").innerHTML = "";
    }
}

function validateEmail(){
    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("erroremail").innerHTML = "Email should not be empty";
    } else {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email)) {
            document.getElementById("erroremail").innerHTML = "Enter a valid email";
        }
        else{
            document.getElementById("erroremail").innerHTML = "";
        }
    }
}

function validateDOB(){
    var dobval = document.getElementById("dob").value;
    var dob = new Date(document.getElementById("dob").value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    if(dobval == ""){
        document.getElementById("errordob").innerHTML = "Date of birth should not be empty";
    }
    else{
        if (age < 18) {
            document.getElementById("errordob").innerHTML = "You must be 18 years or older to register";
        }
        else{
            document.getElementById("errordob").innerHTML = "";
        }
    }
}

function validatePass(){
    var password = document.getElementById("pass").value;
    var pattern = /(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/;
    if(password == ""){
        document.getElementById("errorpassword").innerHTML = "Password should not be empty";
    }
    else{
        if (password.length < 8 || !pattern.test(password)) {
            document.getElementById("errorpassword").innerHTML = "Password must be at least 8 characters long and contain 1 uppercase letter and 1 symbol";
        }
        else{
            document.getElementById("errorpassword").innerHTML = "";
        }
    }
}

function validateConfirmPass() {
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("confirmpass").value;
    if(confirmPassword == ""){
        document.getElementById("errorconfirmpass").innerHTML = "Confirm password should not be empty";
    }
    else{
        if (password !== confirmPassword) {
            document.getElementById("errorconfirmpass").innerHTML = "Passwords do not match";
        }
        else{
            document.getElementById("errorconfirmpass").innerHTML = "";
        }
    }
}

function submitForm(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("confirmpass").value;
    if (firstName == "" || lastName == "" || email == "" || dob == "" || password == "" || confirmPassword == "") {
      alert("Please fill out all the fields");
    } else {
        var formsubmissions = localStorage.getItem("formsubmissions") ? JSON.parse(localStorage.getItem("formsubmissions")) : [];

        for(var i = 0; i < formsubmissions.length; i++){
            if(formsubmissions[i].email == email){
                alert("User email already exists");
                return false;
            }
        }
        formsubmissions.push({email: email, password: password});
        localStorage.setItem("formsubmissions", JSON.stringify(formsubmissions));
        alert("Form submitted successfully");
        window.location.href = 'signup.html';
    }
}