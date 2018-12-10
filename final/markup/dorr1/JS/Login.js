function check() {

    // stored data from the register-form
    var inputEmail = localStorage.getItem('inputEmail');
    var inputPasswordConf = localStorage.getItem('inputPasswordConf');

    // entered data from the login-form
    var loginEmail = document.getElementById('loginEmail');
    var loginPassword = document.getElementById('loginPassword');

    // check if stored data from register-form is equal to data from login form
    if(loginEmail.value == inputEmail && loginPassword.value == inputPasswordConf) {
        window.open("Student.html");
    }else {
        alert('Invalid Username and/or Password ');
        

    }

}