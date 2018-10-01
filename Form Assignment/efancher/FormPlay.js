
// function tyAlert () {
//     alert("Thank you for signing up for one of our dance classes. \n\nYour instructor will contact you soon!");
// }
function classes() {
    window.open("Classes.html", "_blank", "width=610, height=360");
}
// function mondayBallet3()
// {
//     window.open("mondayBallet3.html", "_blank", "width=610, height=360");
//     getMondayBallet3(personList);
// }
// function mondayBallet7()
// {
//     window.open("Classes.html", "_blank", "width=610, height=360");
// }

let form = document.getElementById('submitForm');
console.dir(form);

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', formSubmit);

// let populateList = document.getElementById('classList');
// populateList.addEventListener('click', addStudent);

let personList = [];
var person;
let student;
var successName;
var successDate;
var successContactVia;
var successDance;
var successTime;

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
    let username = getUserID();
    person = 
        {dance,
        name,
        time,
        email,
        date,
        contactVia,
        message,
        phone,
        day,
        username}

    var item = {person, done: false};
    window.localStorage.setItem('student', JSON.stringify(person));
    personList.push(person);
    printSuccess(name, date, dance, contactVia, time)
    console.log(person);
}
function printSuccess(name, date, dance, contactVia, time)
{
    alert('Congratulations '+ name +'! You have successfully signed up for the '+ dance +' class on '+ date +' at '+ time +'! Your instructor will contact you soon by '+ contactVia +'. Have a good day!');
}
// function addStudent (e)
// {
//     e.preventDefault();
//     const text = (this.querySelector('[name=danceForm]')).value;
//     const item = {
//         text,
//         done: false
//     };
//     items.push(item);
//     this.reset();
// }

// function getMondayBallet3(personList) {
    
//     let html = '';

//     for (let i = 0; i < personList.length; i++) {
//         if (personList[i].dance == "ballet") {
//             if (personList[i].day == "Monday"){
//                 if(personList[i].time == "3:00") {
//                     return 
//                     `<li>
//                         ${personList[i].username}
//                     </li>`
//                 }
//             }
//         }
//         // html += `<div>${personList[i].username} input: ${monBallet3.classList2.value}</div>`
//     }
//     console.log(html);
//     document.getElementById('mondayBallet3Class').innerHTML = html;
//     join('');
// }

function getName(fname, lname)
{
    var firstNameEntered;
    var lastNameEntered;
    
    firstNameEntered = document.getElementById("firstName").value;
    lastNameEntered = document.getElementById("lastName").value;

    let nameInput = firstNameEntered + ' ' + lastNameEntered;

    return nameInput;
}
function getUserID(fname, lname)
{
    var firstNameEntered;
    var lastNameEntered;
    var firstInitial;
    
    firstNameEntered = document.getElementById("firstName").value;
    firstInitial = firstNameEntered.charAt(0);
    lastNameEntered = document.getElementById("lastName").value;

    let username = firstInitial + lastNameEntered;

    return username;
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
    dayInputs = days.querySelectorAll('input');

    dayInputs.forEach(item => {
        if(item.checked == true){
            daySelected = item.value;
        }
    });
    return daySelected;

}