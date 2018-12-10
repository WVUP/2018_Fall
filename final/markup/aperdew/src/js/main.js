function validate(){
    var email = register.email.value;
    var password = register.password.value;
    var confirm = register.confirm.value;

    var accounts = [];

    accounts = JSON.parse(localStorage.getItem("accounts"));
    if(accounts !== null){
        for (var i = 0; i < accounts.length; i++){
            if(accounts[i].email == email){
                alert("An account already exists with that Email");
                return false;
            }
        }
    }
    
    if(password != confirm){
        alert("Passwords must match");
        return false;
    }

    if(password.length < 8 || password.length > 20){
        alert("Passwords must be between 8-20 characters");
        return false;
    }
    
    createAccount();
}

function createAccount(){
    var Account = {
        email: register.email.value,
        password: register.password.value,
        firstName: register.firstName.value,
        lastName: register.lastName.value,
        street: register.street.value,
        city: register.city.value,
        state: register.state.value,
        zip: register.zip.value,
        children: []   
    }
    pushToLocal(Account);
}

function pushToLocal(account){

    var accounts = [];

    if(localStorage.length == 0){
        accounts.push(account);
        localStorage.setItem("accounts", JSON.stringify(accounts));
    } else{
        accounts = JSON.parse(localStorage.getItem("accounts"));
        console.log(accounts);
        accounts.push(account);
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }
    event.preventDefault();
    window.location.href = "login.html";
    alert("Registered! Now please login with your account.")
}

function login(){
    var email = $('#email').val();
    var password = $('#password').val();

    var accounts = [];

    accounts = JSON.parse(localStorage.getItem("accounts"));

    for (var i = 0; i < accounts.length; i++){
        if(accounts[i].email == email && accounts[i].password == password){
            console.log("logged in");
            localStorage.setItem("user", i);
            event.preventDefault();
            window.location.href = "addChild.html";
            return true;   
        }
    }

    alert("That email/password combination is not recognized.")
    return false;

}

function getFirstName(){
    var user = localStorage.getItem("user");
    var accounts = [];

    accounts = JSON.parse(localStorage.getItem("accounts"));

    var firstName = accounts[user].firstName;

    document.getElementById("Greeting").innerHTML = "Hello, " + firstName; 
}

function numChildren(){ 
    $("#selectNum").toggleClass("hidden");
    $("#students").toggleClass("hidden");

    switch ($("#numChild").val()){
    
        case "1":
        $('#student2').toggleClass("hidden");
        $('#student3').toggleClass("hidden");
        $('#student4').toggleClass("hidden");
        $('#student5').toggleClass("hidden");
        break;
        case "2":
        $('#student3').toggleClass("hidden");
        $('#student4').toggleClass("hidden");
        $('#student5').toggleClass("hidden");
        break;
        case "3":
        $('#student4').toggleClass("hidden");
        $('#student5').toggleClass("hidden");
        break;
        case "4":
        $('#student5').toggleClass("hidden");
        break;
    }
}

function addChildren(){
    var user = localStorage.getItem("user");
    var accounts = [];

    accounts = JSON.parse(localStorage.getItem("accounts"));

    for(var i = 0; i < $('#numChild').val(); i++){
    }
}

function printInfo(){
    var user = localStorage.getItem("user");
    var accounts = [];

    accounts = JSON.parse(localStorage.getItem("accounts"));

    document.getElementById("print").innerHTML = 
    "<div>" +
    "<h1>You're Information</h1>"+
    "<p>Name: " + accounts[user].firstName + " " + accounts[user].lastName + "<br>" +
    "<p>Email Address: " + accounts[user].email +
    "<p>Street Address: " + accounts[user].street +
    "<p>City: " + accounts[user].city +
    "<p>State: " + accounts[user].state +
    "<p>Zip Code: " + accounts[user].zip +
    "<p>Number of Children: " + accounts[user].children.length +
    "</div>";
}
