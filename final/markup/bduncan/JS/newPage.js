
function nextStep(){
    if( $("#step1").css('visibility') == 'visible') {
        console.log("step 1 to step 2")
        //document.getElementsByClassName("progress-bar").style.width = "33%";
        document.getElementById("step1").style.visibility= "hidden";
        document.getElementById("step1").style.width= "0";
        document.getElementById("step1").style.height= "0";
        document.getElementById("step2").style.visibility= "visible";
        document.getElementById("step2").style.width= "auto";
        document.getElementById("step2").style.height= "auto";
    }
    else if($("#step2").css('visibility') == 'visible'){
        console.log("step 2 to step 3")
        document.getElementById("step2").style.visibility = "hidden";
        document.getElementById("step2").style.width= "0";
        document.getElementById("step2").style.height= "0";
        document.getElementById("step3").style.visibility = "visible";
        document.getElementById("step3").style.width= "auto";
        document.getElementById("step3").style.height= "auto";
    }
    else if($("#step3").css('visibility') == 'visible'){
        saveData();
        window.location.href = "profile.html";
    }
    else{
        console.log("An error has happened")
    }
    return false;
}

function saveData(){
    
    var username = document.getElementById('username').value;
    var password = document.getElementById("password").value;
    var firstName = document.getElementById('FirstName').value;
    var lastName = document.getElementById('LastName').value;
    var street = document.getElementById('street').value;
    var city = document.getElementById('City').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var cFirstName = document.getElementById('cFirstName').value;
    var cLastName = document.getElementById('cLastName').value;
    var cDOB = document.getElementById('cDOB').value;
    var cSports = document.getElementById('Sports').value;
       
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('street', street);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
    localStorage.setItem('zip', zip);
    localStorage.setItem('cFirstName', cFirstName);
    localStorage.setItem('cLastName', cLastName);
    localStorage.setItem('cDOB', cDOB);
    localStorage.setItem('Sports', Sports);
    


}