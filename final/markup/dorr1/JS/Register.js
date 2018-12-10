var pass = document.getElementById("inputPassword");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var special = document.getElementById("special");
var length = document.getElementById("length");
var conf = document.getElementById("inputPasswordConf");
var same = document.getElementById("same");

pass.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (pass.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (pass.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (pass.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate special
    var specials = /[!@#$%^&*()]/g;
    if (pass.value.match(specials)) {
        special.classList.remove("invalid");
        special.classList.add("valid");
    } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }

    // Validate length
    if (pass.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// Validate Password Confirmation
conf.onkeyup = function () {
    var passw = $("#inputPassword").val();
    if (conf.value.match(passw)) {
        same.classList.remove("invalid");
        same.classList.add("valid");
    } else {
        same.classList.remove("valid");
        same.classList.add("invalid");
    }


}

//Validate Form has been filled out 
function validateForm() {
    var ParentsFirst = document.forms["ParentRegister"]["ParentFirst"].value;
    if (ParentsFirst == "") {
        alert("First Name Required");
        return false;
    } else {
        localStorage.setItem('ParentFirst', ParentsFirst);
    }

    var ParentsLast = document.forms["ParentRegister"]["ParentLast"].value;
    if (ParentsLast == "") {
        alert("Last Name Required");
        return false;
    } else {
        localStorage.setItem('ParentLast', ParentsLast);
    }

    var inputsStreet = document.forms["ParentRegister"]["inputStreet"].value;
    if (inputsStreet == "") {
        alert("Street Required");
        return false;
    } else {
        localStorage.setItem('inputStreet', inputsStreet);
    }

    var inputsCity = document.forms["ParentRegister"]["inputCity"].value;
    if (inputsCity == "") {
        alert("City Required");
        return false;
    } else {
        localStorage.setItem('inputCity', inputsCity);
    }

    var inputsState = document.forms["ParentRegister"]["inputState"].value;
    if (inputsState == "") {
        alert("Choose a State");
        return false;
    } else {
        localStorage.setItem('inputState', inputsState);
    }

    var inputsZip = document.forms["ParentRegister"]["inputZip"].value;
    if (inputsZip == "") {
        alert("Zip Code Required");
        return false;
    } else {
        localStorage.setItem('inputZip', inputsZip);
    }

    var inputsEmail = document.forms["ParentRegister"]["inputEmail"].value;
    if (inputsEmail == "") {
        alert("Email Required");
        return false;
    } else {
        localStorage.setItem('inputEmail', inputsEmail);
    }

    var inputsPhone = document.forms["ParentRegister"]["inputPhone"].value;
    if (inputsPhone == "") {
        alert("Phone Number Required");
        return false;
    } else {
        localStorage.setItem('inputPhone', inputsPhone);
    }

    var inputsPassword = document.forms["ParentRegister"]["inputPassword"].value;
    if (inputsPassword == "") {
        alert("Choose a Password");
        return false;
    }

    var inputsPasswordConf = document.forms["ParentRegister"]["inputPasswordConf"].value;
    if (inputsPasswordConf == "") {
        alert("Enter Password again to Confirm");
        return false;
    } else {
        localStorage.setItem('inputPasswordConf', inputsPasswordConf);
        window.load(Login.html);
    }
}


(function () {
    'use strict';
    window.addEventListener('load', function () {
        //Bootstrap Valid Form Method
        var forms = document.getElementsByClassName('needs-validation');
        //Do not submit if invalid or save to local storage if valid
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    var ParentsFirst = document.getElementById('ParentFirst').value;
                    var ParentsLast = document.getElementById('ParentLast').value;
                    var inputsStreet = document.getElementById('inputStreet').value;
                    var inputsCity = document.getElementById('inputCity').value;
                    var inputsState = document.getElementById('inputState').value;
                    var inputsZip = document.getElementById('inputZip').value;
                    var inputsEmail = document.getElementById('inputEmail').value;
                    var inputsPhone = document.getElementById("inputPhone").value;
                    var inputsPasswordConf = document.getElementById("inputPasswordConf").value;
                    //Local Storage
                    localStorage.setItem('ParentFirst', ParentsFirst);
                    localStorage.setItem('ParentLast', ParentsLast);
                    localStorage.setItem('inputStreet', inputsStreet);
                    localStorage.setItem('inputCity', inputsCity);
                    localStorage.setItem('inputState', inputsState);
                    localStorage.setItem('inputZip', inputsZip);
                    localStorage.setItem('inputEmail', inputsEmail);
                    localStorage.setItem('inputPhone', inputsPhone);
                    localStorage.setItem('inputPasswordConf', inputsPasswordConf);
                    //Go to Login
                    window.open("Login.html");
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function autoform() {
    document.getElementById('ParentFirst').value = "Aaron";
    document.getElementById('ParentLast').value = "Freeland";
    document.getElementById('inputStreet').value = "300 Campus Drive";
    document.getElementById('inputCity').value = "Parkersburg";
    document.getElementById('inputState').value = "WV";
    document.getElementById('inputZip').value = "26104";
    document.getElementById('inputEmail').value = "afreeland@wvup.edu";
    document.getElementById("inputPhone").value = "304-424-8000";
}
