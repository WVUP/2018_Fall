
//This is good
function getRegistration() {
  var emailInp = document.getElementById("myEmail").value;
  var passwordInp = document.getElementById("myPassword").value;
  var confirmPasswordInp = document.getElementById("myConfirmPassword").value;
  var firstNameInp = document.getElementById("myFirstName").value;
  var lastNameInp = document.getElementById("myLastName").value;
  var addressInp = document.getElementById("myAddress").value;    
  var cityInp = document.getElementById("myCity").value;    
  var stateInp = document.getElementById("myState").value;
  var zipInp = document.getElementById("myZip").value;    

  //used to ensure that fields aren't empty
  if ((emailInp === "") || (passwordInp === "") || (confirmPasswordInp === "") || (firstNameInp === "") || (lastNameInp === "") || (addressInp === "") || (cityInp === "") || (stateInp === "") || (zipInp === ""))
  {
    alert("All fields are required");
  }

  //used to ensure that password fields match
  if (passwordInp !== confirmPasswordInp)
  {
    alert("passwords don't match");
  }    

  var object = new registration(emailInp, passwordInp, firstNameInp, lastNameInp, addressInp, cityInp, stateInp, zipInp);

  localStorage.setItem("regResult",JSON.stringify(object));
  
}

var user = JSON.parse(localStorage.getItem("regResult"));

//Constructor
function registration(emailInp, passwordInp, firstNameInp, lastNameInp, addressInp, cityInp, stateInp, zipInp) 
{
    this.emailInp = emailInp; 
    this.passwordInp = passwordInp; 
    this.firstNameInp = firstNameInp; 
    this.lastNameInp = lastNameInp; 
    this.addressInp = addressInp; 
    this.cityInp = cityInp; 
    this.stateInp = stateInp; 
    this.zipInp = zipInp;   
}

document.getElementById("printEmail").innerHTML = user.emailInp; 
document.getElementById("printFirstName").innerHTML = user.firstNameInp; 
document.getElementById("printLastName").innerHTML = user.lastNameInp; 
document.getElementById("printAddress").innerHTML = user.addressInp; 
document.getElementById("printCity").innerHTML = user.cityInp; 
document.getElementById("printState").innerHTML = user.stateInp; 
document.getElementById("printZip").innerHTML = user.zipInp; 




// //WIP
// function childSelection(childSelect)
// {    
//     if (ChildSignUp === "2")
//     {
//         document.getElementById("child2").style.opacity = "1";
//     }    
    
//     if (ChildSignUp === "3")
//     {
//         document.getElementById("child3").style.opacity = "1";
//     }
// }


// //WIP
// function myFunction() {
//   var x = document.getElementById("child2");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

