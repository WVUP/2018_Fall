function toggleRegOne(){
    let regOne = document.getElementById('regOne');
    let regTwo = document.getElementById('regTwo');

    regOne.classList.toggle('hide');
    regTwo.classList.toggle('hide');
    
}
function toggleRegTwo(){
    let regTwo = document.getElementById('regTwo');
    let successMessage = document.getElementById('regSuccess');


    regTwo.classList.toggle('hide');
    successMessage.classList.toggle('hide');
}
// function toggleSuccessMessage(){
//     let successMessage = document.getElementById('regSuccess');
//     let regTwo = document.getElementById('regTwo');

//     successMessage.classList.toggle('hide');
//     regTwo.classList.toggle('hide');
    
// }
let numStudents;
function displayStudents(numStudents){
    numStudents = document.getElementById('numStudents').value;
    let studentNumDiv = document.getElementById('regThree');
    let students= document.getElementById('studentSignup');

    students.classList.toggle('hide');
    studentNumDiv.classList.toggle('hide');
    console.log(numStudents);

    let oneStudent = document.getElementById('student1');
    let twoStudents = document.getElementById('student2');
    let threeStudents = document.getElementById('student3');
    let fourStudents = document.getElementById('student4');
    let fiveStudents = document.getElementById('student5');

    if(numStudents == '1'){
        oneStudent.classList.toggle('hide');
    }
    if(numStudents == '2'){
        oneStudent.classList.toggle('hide');
        twoStudents.classList.toggle('hide');
    }
    if(numStudents == '3'){
        oneStudent.classList.toggle('hide');
        twoStudents.classList.toggle('hide');
        threeStudents.classList.toggle('hide');
    }
    if(numStudents == '4'){
        oneStudent.classList.toggle('hide');
        twoStudents.classList.toggle('hide');
        threeStudents.classList.toggle('hide');
        fourStudents.classList.toggle('hide');
    }
    if(numStudents =='5'){
        oneStudent.classList.toggle('hide');
        twoStudents.classList.toggle('hide');
        threeStudents.classList.toggle('hide');
        fourStudents.classList.toggle('hide');
        fiveStudents.classList.toggle('hide');
    }

}

let userInfo;
let parentInfo;
let studentInfo;


function submitRegister(){
    let parentEmail = document.getElementById('parentEmail').value;
    let parentPass = document.getElementById('password-2').value;
    let parentName = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    let parentAddress = {
        street:document.getElementById('street').value,
        city:document.getElementById('city').value,
        state:document.getElementById('state').value,
        zip:document.getElementById('zipcode').value,
    }
    parentInfo = {
        email:parentEmail,
        password:parentPass,
        name:parentName,
        address:parentAddress,
    }

    

    console.log(parentInfo);
    localStorage.setItem("parent1",JSON.stringify(parentInfo));
    console.log(localStorage.getItem("parent1"));
}
function submitSignup(){
    let parentEmail = document.getElementById('email-signin').value;
    let parentPass = document.getElementById('password-signin').value;
    
    let parent = JSON.parse(localStorage.getItem("parent1"));
    if((parent.email) == parentEmail){
        studentInfo(parent, null);
    }

    console.log(parent);
    localStorage.setItem("parent1",JSON.stringify(parent));
    console.log(localStorage.getItem("parent"));
}
function studentSignup(parentInfo, numStudents, student){
    let studentName = document.getElementById('firstNameStudent').value + ' ' + document.getElementById('lastNameStudent');
    let studentDOB = document.getElementById('studentDOB').value;
    let gradeLevel = document.getElementById('gradeLevel').value;
    let sports = document.getElementById('sportChoices').value;

    for(let i = 0; i < numStudents; i++){
        studentInfo[i] = {
            name:studentName,
            DOB:studentDOB,
            grade:gradeLevel,
            sports:sports,
        }
    }
    userInfo = {
        parent:parentInfo,
        student:studentInfo,
    }
    console.log(studentInfo);
    localStorage.setItem("child1",JSON.stringify(studentInfoInfo));
    console.log(userInfo);
}