console.log('application starting');

function test(){
    console.log('called test');
}

function openGoogle(){
    window.open('http://google.com')
}

function doWork(){
    alert('button clicked');
}

var fakeButton = document.getElementById('test');
fakeButton.addEventListener('click', buildUI)

// var people = ['Aaron', 'Lane'];

var people = [

    {
        firstName: 'Aaron',
        lastName: 'Freeland',
        age: 32,
        "fav team": "red",
    },

    {
        firstName: 'Lane',
        lastName: 'Katris',
        age: 26,
        "fav team": "red",
    }

]

var escapingSample = "O'shays"



function buildUI(){
    // Store a lot of different html elements in one string to append to our page
    let html = '';

    // Iterate though each user
    for (let i = 0; i < people.length; i++) {
        // console.log(people[i].firstName);
    
        // Traditional Way
        // people[i].fullName = people[i].firstName + ' ' + people[i].lastName
    
        // Template Literal
        people[i].fullName = `${people[i].firstName} ${people[i].lastName}`
    
        html += `<div>${people[i].fullName} input: ${myFrm.username.value}</div>`
        
    }

    console.log(html);
    document.getElementById('sample').innerHTML = html;
}

function addPerson(fname, lname, age){
    people.push({
        firstName: fname,
        lastName: lname,
        age: age
    })

    buildUI();
}

// let html = people.map(x => `<div>${x.firstName}</div>`)
// console.log(html);

// function Person(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }

// Person.prototype = {
//     fullName: function(){
//         return this.firstName + this.lastName;
//     }
// }
// var p = new Person('Aaron', 'Freeland')