var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onkeyup = function() 
{
    var lowerCaseLetters = new RegExp('[a-z]');
    if(myInput.value.match(lowerCaseLetters)) 
    { 
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } 
    else 
    {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
  
}