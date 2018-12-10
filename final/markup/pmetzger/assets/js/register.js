var emailsInUse = [];
var hasError = false;

function validateForm(e) {
    e.preventDefault();
    var errors = document.getElementsByClassName("error");
    for(var i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPass").value;
    var isValid = validateEmail(email);
    isValid &= validatePassword(password);
    isValid &= validatePassWordMatch(password, confirmPassword);

    if(isValid) {
        emailsInUse.push(email);
        window.location.href = 'profile.html';
    }
}

function resetForm(e) {
    e.preventDefault();
    window.location.href = 'register.html';
}

function validateEmail(email) {
    if(!email.includes("@")) {
        document.getElementById("emailErrors").innerHTML = "Not A Valid Email.";
        return false;
    }
    else if(emailsInUse.includes(email)) {
        document.getElementById("emailErrors").innerHTML = "Email Already Taken.";
        return false;
    }

    return true;
}

function validatePassword(password) {
    var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(password.length < 8 || password.length > 20 || !passwordRegex.test(password)) {
        document.getElementById("passwordErrors").innerHTML = "Password Does Not Meet Requirements.<br>";
        return false;
    }

    return true;
}

function validatePassWordMatch(password, confirmPassword) {
    if(password != confirmPassword) {
        document.getElementById("passwordErrors").innerHTML += "Passwords Do Not Match.";
        return false;
    }
    
    return true;
}