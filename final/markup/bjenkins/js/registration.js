// Pass1 is the initial password, Pass2 is the confirmed password
var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');

// Variables to check password complexity
var lowerCase = document.getElementById('letter');
var upperCase = document.getElementById('upper');
var number = document.getElementById('number');
var length = document.getElementById('length');

pass1.onfocus = function() {
	document.getElementById("message").style.display = "block";
}
pass2.onfocus = function() {
	document.getElementById("message").style.display = "block";
}

pass1.onblur = function() {
    document.getElementById("message").style.display = "none";
}
pass2.onblur = function() {
    document.getElementById("message").style.display = "none";
}

pass1.onkeyup = function() {
	// Validating lower case letters
	var lowerCaseLetters = /[a-z]/g;
	if(pass1.value.match(lowerCaseLetters)) {
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	}
	
	// Validating upper case letters
	var upperCaseLetters = /[A-Z]/g;
	if(pass1.value.match(upperCaseLetters)) {
		upper.classList.remove("invalid");
		upper.classList.add("valid");
	} else {
		upper.classList.remove("valid");
		upper.classList.add("invalid");
	}
	
	// Validating numbers
	var numbers = /[0-9]/g;
	if(pass1.value.match(numbers)) {
		number.classList.remove("invalid");
		number.classList.add("valid");
	} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
	}
	
	// Validating length
	if(pass1.value.length >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
	} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
	}
}

function checkPass() {
	// Insert message into page
	var message = document.getElementById('confirmPassword');
	// Change color of text & background depending on password check
	var match = "#66CC66";
	var noMatch = "#FF5555";
	
	if(pass1.value !== pass2.value) {
		pass2.style.backgroundColor = noMatch;
		message.style.color = noMatch;
		message.style.fontSize = "22px";
		message.style.marginLeft = "15px";
		message.innerHTML = "Your passwords don't match!";
	} else {
		pass2.style.backgroundColor = match;
		message.style.color = match;
		message.style.fontSize = "22px";
		message.style.marginLeft = "15px";
		message.innerHTML = "Your passwords match!";
	}
}

window.onload=function() {
	
	// Filling the text boxes with data just so I don't have to type
	document.getElementById('email').setAttribute("value", "test@test.com");
	// Don't forget to type the number, so you can see the validation works
	document.getElementById('pass1').setAttribute("value", "testPASS");
	document.getElementById('pass2').setAttribute("value", "testPASS");

	document.getElementById('registerForm').onsubmit=function() {
		window.location.replace('profile.html');
    return false;
	}
}
