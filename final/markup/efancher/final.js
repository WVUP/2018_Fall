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
function displayStudents(){
    numStudents = document.getElementById('numStudents').value;
    let studentNumDiv = document.getElementById('regThree');
    let students= document.getElementById('studentSignup');
    localStorage.setItem("numStudents", numStudents);

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
    localStorage.setItem("parent",JSON.stringify(parentInfo));
    console.log(localStorage.getItem("parent"));
}
function submitSignin(){
    let parentEmail = document.getElementById('email-signin').value;
    let parentPass = document.getElementById('password-signin').value;
    let parentConfirm = JSON.parse(localStorage.getItem("parent"));
    
    if((parentConfirm.email == parentEmail) && (parentConfirm.password == parentPass)){
        window.open('final-signup.html');
    }
    else{
        event.preventDefault();
        document.getElementById('signinFailure').classList.toggle('hide');
    }

}
function studentSignup(){
    numStudents = JSON.parse(localStorage.getItem("numStudents"));
    for(let i = 0; i < numStudents; i++){
        let studentName = document.getElementById(`firstNameStudent${i+1}`).value + ' ' + document.getElementById(`lastNameStudent${i+1}`).value;
        let studentDOB = document.getElementById(`studentDOB${i+1}`).value;
        let gradeLevel = document.getElementById(`gradeLevel${i+1}`).value;
        let sportsCheck = document.querySelectorAll(`#sportChoices${i+1} > [type=checkbox]`);
        console.log(sportsCheck);
        let sports = "";
        sportsCheck.forEach(element => {
            console.dir(element);
            if(element.checked){
                sports += element.value + ', ';
            }
        });
        // let studentName = document.getElementById('firstNameStudent1').value + ' ' + document.getElementById('lastNameStudent1');
        // let studentDOB = document.getElementById('studentDOB1').value;
        // let gradeLevel = document.getElementById('gradeLevel1').value;
        // let sports = document.getElementById('sportChoices1').value;
        
        studentInfo = { 
            name:studentName,
            DOB:studentDOB,
            grade:gradeLevel,
            sports:sports.slice(0, sports.length-2),
        }
    
    
        console.log(studentInfo);
        localStorage.setItem(`child${i}`, JSON.stringify(studentInfo));
    }
}
function confirmPage(){
    // userInfo = {
    //     parent:parentInfo,
    //     student:studentInfo,
    // }
    // console.log(userInfo);
    numStudents = JSON.parse(localStorage.getItem("numStudents"));
    let parentConfirm = JSON.parse(localStorage.getItem("parent"));
    let address = parentConfirm.address;
    console.log(parentConfirm);
    // console.log(studentConfirm);

    document.getElementById('parentNameConfirm').innerText = parentConfirm.name;
    document.getElementById('parentEmailConfirm').innerText = parentConfirm.email;
    document.getElementById('addressConfirm').innerText = `${address.street} \n ${address.city}, ${address.state}, ${address.zip}`;
    
    for(let i = 0; i < numStudents; i++){
        let studentDisplayConfirm = document.getElementById(`studentConfirm[${i}]`);
        studentDisplayConfirm.classList.toggle('hide');
        let studentConfirm = JSON.parse(localStorage.getItem(`child${i}`));
        document.getElementById(`studentNameConfirm[${i}]`).innerText = studentConfirm.name;
        document.getElementById(`studentDOBConfirm[${i}]`).innerText = studentConfirm.DOB;
        document.getElementById(`studentGradeConfirm[${i}]`).innerText = studentConfirm.grade;
        document.getElementById(`studentSportsConfirm[${i}]`).innerText = studentConfirm.sports;
    }
    
}