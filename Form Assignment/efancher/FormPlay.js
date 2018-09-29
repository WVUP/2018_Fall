
// function tyAlert () {
//     alert("Thank you for signing up for one of our dance classes. \n\nYour instructor will contact you soon!");
// }
function classes() {
    window.open("Classes.html", "_blank", "width=610, height=360");
}
function mondayBallet3()
{
    window.open("mondayBallet3.html", "_blank", "width=610, height=360");
}
function mondayBallet7()
{
    window.open("Classes.html", "_blank", "width=610, height=360");
}

let form = document.getElementById('submitForm');
console.dir(form);

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', formSubmit);

let personList = [];

function formSubmit(event)
{
    event.preventDefault();
    let dance = getDanceSelected();
    let name = getName();
    let time = getClassTimeSelected();
    let email = getEmail();
    let date = getClassDate();
    let contactVia = getBestContact();
    let message = getMessage();
    let phone = getPhoneNumber();
    let day = getDayOfWeek();
    let person = {
        dance,
        name,
        time,
        email,
        date,
        contactVia,
        message,
        phone,
        day
    };

    personList.push(person);
    console.log(person);
}
function findMondayBalletClass3()
{
    personList.find(item =>
        {
            if (item.dance == "ballet"); AND (item.date == "Monday"); AND (item.time == "3:00 PM");{
                return item};
        });
}

function getName(fname, lname)
{
    var firstNameEntered;
    var lastNameEntered;
    
    firstNameEntered = document.getElementById("firstName").value;
    lastNameEntered = document.getElementById("lastName").value;

    let nameInput = firstNameEntered + ' ' + lastNameEntered;

    return nameInput;
}
function getEmail()
{
    var emailEntered;
    
    emailEntered = document.getElementById("email").value;

    return emailEntered;
}

function getDanceSelected()
{
    var danceSelected;
    var dances;
    let danceInputs;

    dances = form.querySelector('[data-dance-style]');
    danceInputs = dances.querySelectorAll('input');

    danceInputs.forEach(item => {
        if(item.checked == true){
            danceSelected = item.value;
        }
    });
    return danceSelected;
}

function getClassTimeSelected()
{
    var timeSelected;
    var times;
    var timeInput;

    times = form.querySelector('[data-class-time');
    timeInput = times.querySelectorAll('input');

    timeInput.forEach(item => {
        if(item.checked == true){
            timeSelected = item.value;
        }
    });
    return timeSelected;
    
}
function getClassDate()
{
    let dateInput;
    dateInput = document.getElementById('classDate').value;

    return dateInput;
}

function getBestContact() 
{
    var bestContactType;

    bestContactType = document.getElementById("contact").value;

    return bestContactType;
}

function getPhoneNumber()
{
    var phoneNum;

    phoneNum = document.getElementById("phoneNumber").value;

    return phoneNum;
}

function getMessage()
{
    var messageInput;

    messageInput = document.getElementById("messageInstructor").value;

    return messageInput;
}

function getDayOfWeek()
{
    var daySelected;
    var days;
    let dayInputs;

    days = form.querySelector('[data-day]');
    dayInputs = dances.querySelectorAll('input');

    dayInputs.forEach(item => {
        if(item.checked == true){
            daySelected = item.value;
        }
    });
    return daySelected;

}