/* 
check if user is signed in
    adjust elements to the signed in user

*/

function getProfile(){
    document.getElementsByClassName("rightNav").innerHTML = "Welcome, " + localStorage.get("firstName");
    document.getElementsByID("firstNameWel").innerHTML = "Hello, " + localStorage.get("firstName");
    document.getElementsByID("firstName").innerHTML = "First Name:  " + localStorage.get("firstName");
    document.getElementsByID("lastName").innerHTML = "Last Name:  " + localStorage.get("lastName");
    document.getElementsByID("streetAddress").innerHTML = "Street Address:  " + localStorage.get("street");
    document.getElementsByID("city").innerHTML = "City:  " + localStorage.get("city");
    document.getElementsByID("state").innerHTML = "State:  " + localStorage.get("state");
    document.getElementsByID("zip").innerHTML = "zip:  " + localStorage.get("zip");
    document.getElementsByID("child1FirstName").innerHTML = "First Name:  " + localStorage.get("cFirstName");
    document.getElementsByID("child1LastName").innerHTML = "Last Name:  " + localStorage.get("cLastName");
    document.getElementsByID("child1DOB").innerHTML = "DOB:  " + localStorage.get("cDOB");
    document.getElementsByID("child1Sports").innerHTML = "Sports:  " + localStorage.get("cSports");
}

