var password1 = document.getElementById("password");
var password2 = document.getElementById("password2");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

password1.onkeyup = function() 
{   //Lower Case Check
    var lowerCaseLetters = new RegExp('[a-z]');
    if(password1.value.match(lowerCaseLetters)) 
    { 
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } 
    else 
    {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //Uppercase Check
    var upperCaseLetters = new RegExp('[A-Z]');
    if(password1.value.match(upperCaseLetters)) 
    { 
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } 
    else 
    {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    
    //Match Check
    if(password1.value.match(password2.value)) 
    { 
        match.classList.remove("invalid");
        match.classList.add("valid");
    } 
    else 
    {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
      //Number Check
      var number = new RegExp('[0-9]');
      if(password1.value == password2.value) 
      { 
          number.classList.remove("invalid");
          number.classList.add("valid");
      } 
      else 
      {
          number.classList.remove("valid");
          number.classList.add("invalid");
      }
      //Length check
        if(password1.value.length >= 8)
        { 
            length.classList.remove("invalid");
            length.classList.add("valid");
        } 
        else 
        {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
}
password2.onkeyup = function(){
    //Match Check
    if(password1.value == password2.value) 
    { 
        match.classList.remove("invalid");
        match.classList.add("valid");
    } 
    else 
    {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
} 