function validatefirstname(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname");
    if (firstName == "") {
      alert("First name must be filled out");
      lastName.disabled = true;
    } else {
      lastName.disabled = false;
    }
}

function validatelastname(){
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email");
    if(lastName == ""){
        alert("Last name must be filled out");
        email.disabled = true;
    }
    else{
        email.disabled = false;
    }
}

function validateemail(){
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob");
    if (email == "") {
      alert("Email must be filled out");
      dob.disabled = true;
    } else {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email)) {
            alert("Enter valid email address");
            return false;
        }
        dob.disabled = false;
        return true;
    }
}

function validatedob(){
    var dob = new Date(document.getElementById("dob").value);
    var password = document.getElementById("pass");
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    if (age < 18) {
      alert("Age must be 18 years or older");
      password.disabled = true;
    } else {
      password.disabled = false;
    }
}

function validatepass(){
    var password = document.getElementById("pass").value;
    var pattern = /(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/;
    var confirmPassword = document.getElementById("confirmpass");
    if (password.length < 8 || !pattern.test(password)) {
      alert("Password must be at least 8 characters long and contain 1 uppercase letter and 1 symbol");
      confirmPassword.disabled = true;
    } else {
      confirmPassword.disabled = false;
    }
}

function validateconfirmpass() {
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("confirmpass").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
}

function submitform(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("confirmpass").value;
    if (firstName == "" || lastName == "" || email == "" || dob == "" || password == "" || confirmPassword == "") {
      alert("Please fill out all the fields");
      return false;
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

        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("confirmpass").value = "";

        alert("Form submitted successfully");
      
        return true;
    }
}