var form = document.getElementById("myForm");
console.dir(form);

var submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', displaySummary);

var request = [];

var firstName, lastName, middleInitial, employeeID, employeeDepartment, requestStart, requestEnd, requestType;


function displaySummary()
{
   event.preventDefault();

    // firstName = document.getElementById("firstName");
    // lastName = document.getElementById("lastName");
    // middleInitial = document.getElementById("middleInitial");
    // employeeID = document.getElementById("employeeDepartment");
    // employeeDepartment = document.getElementById("employeeDepartment");
    // requestStart = document.getElementById("requestStart");
    // requestEnd = document.getElementById("requestEnd");
    // requestType = document.getElementById("requestType");

    firstName = getsFirstName();
    lastName = getsLastName();
    middleInitial = getsMiddleInitial();
    requestStart = getsRequestStart();
    requestEnd = getsRequestEnd();

    var employee = {firstName, lastName, middleInitial, employeeID, employeeDepartment, requestStart, requestEnd, requestType};

    request.push(employee);
    console.log(employee);
    confirmationAlert(firstName, lastName, middleInitial, employeeID, employeeDepartment, requestStart, requestEnd, requestType);
}

function getsFirstName(FirstName)
{
    var firstNameEntered;

    firstNameEntered = document.getElementById("fName").value;
    return firstNameEntered;
}

function getsLastName(LastName)
{
    var lastNameEntered;

    lastNameEntered = document.getElementById("lName").value;
    return lastNameEntered;
}

function getsMiddleInitial(MiddleInitial)
{
    var middleInitialEntered;

    middleInitialEntered = document.getElementById("mInitial").value;
    return middleInitialEntered;
}

function getsRequestStart(requestStart)
{
    var requestStartEntered;

    requestStartEntered = document.getElementById("reqStart").value;
    return requestStartEntered;
}

function getsRequestEnd(requestEnd)
{
    var requestEndEntered;

    requestEndEntered = document.getElementById("reqEnd").value;
    return requestEndEntered;
}

function confirmationAlert(firstName, lastName, middleInitial, employeeID, employeeDepartment, requestStart, requestEnd, requestType)
{
    alert("CONFIRMED " + firstName + " " + middleInitial + ". " + lastName + " Your request off for                     " + requestStart + " - " + requestEnd + " has been submitted.");
}