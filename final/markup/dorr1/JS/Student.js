// Add/Remove more students to Form
function showhide() {
    
    var x = document.getElementById("addStudent2");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}

// Storage
window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('StudentInfo').addEventListener('submit', function() {
        var StudentFirst1 = document.getElementById('StudentFirst1').value;
        var StudentLast1 = document.getElementById('StudentLast1').value;
        var inputGrade1 = document.getElementById('inputGrade1').value;
        var inputAge1 = document.getElementById('inputAge1').value;
        
  
        // Save in localStorage.
        localStorage.setItem('StudentFirst1', StudentFirst1);
        localStorage.setItem('StudentLast1', StudentLast1);
        localStorage.setItem('inputGrade1', inputGrade1);
        localStorage.setItem('inputAge1', inputAge1);
      });
    }
  }

function gotoform(){
  window.open("Form.html");
}