var submit = document.getElementById('submit');
submit.addEventListener('click', myInfoForm);

function myInfoForm(event)
{
    event.preventDefault();
    // First Name
    var firstName = document.getElementById("Fname");
    document.getElementById("firstName").innerText = firstName.value;
    // Last Name
    var lastName = document.getElementById("Lname");
    document.getElementById("lastName").innerText = lastName.value;
    // Phone Number
    var phoneNumber = document.getElementById("phone");
    document.getElementById("phoneNumber").innerText = phoneNumber.value;
    // Email Address
    var emailAdd = document.getElementById("email");
    document.getElementById("emailAdd").innerText = emailAdd.value;
    // Street Address
    var streetAdd = document.getElementById("street");
    document.getElementById("streetAdd").innerText = streetAdd.value;
    // City
    var cityName = document.getElementById("city");
    document.getElementById("cityName").innerText = cityName.value;
    // State
    var stateName = document.getElementById("state");
    document.getElementById("stateName").innerText = stateName.value;
    // Zip Code
    var zipCodeName = document.getElementById("zipCode");
    document.getElementById("zipCodeName").innerText = zipCodeName.value;
    // Gender
    var genderName = document.getElementById("gender");
    document.getElementById("genderName").innerText = genderName.value;
     // Date
     var dateName = document.getElementById("date");
     document.getElementById("dateName").innerText = dateName.value;
}
