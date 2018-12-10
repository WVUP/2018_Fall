




function getInput() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var confrimPassword = document.getElementById("ConfirmPassword").value;
    var parentFirstName = document.getElementById("ParentFirstName").value;
    var parentLastName = document.getElementById("ParentLastName").value;
    var street = document.getElementById("Street").value;
    var city = document.getElementById("City").value;
    var state = document.getElementById("State").value;
    var zipCode = document.getElementById("ZipCode").value;
    var studentFirstName = document.getElementById("StudentFirstName").value;
    var studentLastName = document.getElementById("StidentLastName").value;
    var dateOfBirth = document.getElementById("DOB").value;
    var gradeLevel = document.getElementById("GradeLevel").value;
    var football = document.getElementById("Football").value;
    var baseball = document.getElementById("Baseball").value;
    var softball = document.getElementById("Softball").value;
    var basketball = document.getElementById("Basketball").value;
    var golf = document.getElementById("Golf").value;
    var cheerleading = document.getElementById("Cheerleading").value;
    var volleyball = document.getElementById("Volleyball").value;
    var trackField = document.getElementById("Track&Field").value;
    var crossCountry = document.getElementById("CrossCountry").value;
    var wrestling = document.getElementById("Wrestling").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword" , confrimPassword);
    localStorage.setItem("parentFirstName" , parentFirstName);
    localStorage.setItem("parentLastName" , parentLastName);
    localStorage.setItem("street", street);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("zipCode", zipCode);
    localStorage.setItem("studentFirstName", studentFirstName);
    localStorage.setItem("studentLastName", studentLastName);
    localStorage.setItem("dateOfBirth", dateOfBirth);
    localStorage.setItem("gradeLevel", gradeLevel);
    localStorage.setItem("football", football);
    localStorage.setItem("baseball", baseball);
    localStorage.setItem("softball", softball);
    localStorage.setItem("basketball", basketball);
    localStorage.setItem("golf", golf);
    localStorage.setItem("cheerleading", cheerleading);
    localStorage.setItem("volleyball", volleyball);
    localStorage.setItem("trackField", trackField);
    localStorage.setItem("crossCountry", crossCountry);
    localStorage.setItem("wrestling", wrestling);

}













