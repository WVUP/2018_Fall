var pass = document.getElementById("inputPassword");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
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

// Add/Remove more students to Form
function showhide() {
    
    var x = document.getElementById("addStudent2");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}

// Storage
window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('ParentRegister').addEventListener('submit', function() {
        var ParentFirst = document.getElementById('ParentFirst').value;
        var ParentLast = document.getElementById('ParentLast').value;
        var inputStreet = document.getElementById('inputStreet').value;
        var inputCity = document.getElementById('inputCity').value;
        var inputState = document.getElementById('inputState').value;
        var inputZip = document.getElementById('inputZip').value;
        var inputEmail = document.getElementById('inputEmail').value;
        var inputPhone = document.getElementById("inputPhone").value;
        var inputPasswordConf = document.getElementById("inputPasswordConf").value;
  
        // Save in localStorage.
        localStorage.setItem('ParentFirst', ParentFirst);
        localStorage.setItem('ParentLast', ParentLast);
        localStorage.setItem('inputStreet', inputStreet);
        localStorage.setItem('inputCity', inputCity);
        localStorage.setItem('inputState', inputState);
        localStorage.setItem('inputZip', inputZip);
        localStorage.setItem('inputEmail', inputEmail);
        localStorage.setItem('inputPhone', inputPhone);
        localStorage.setItem('inputPasswordConf', inputPasswordConf);
      });
    }
  }

function gotologin() {
        location.href=("Login.html");
}
