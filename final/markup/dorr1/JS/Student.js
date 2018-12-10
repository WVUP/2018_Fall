// Add/Remove more students to Form    
window.load = function(){
  $("#StudentFirst2").on("show.bs.collapse", function() {
    $("#StudentFirst2").prop("disabled", true);
  });
}

$("input").on("hide.bs.collapse", function() {
  $("input").prop("disabled", false);
});

// Re-disable all
// $('.disabledCheckboxes').prop("disabled", true);

// Storage
//window.onload = function() {

    // Check for LocalStorage support.
//    if (localStorage) {
  
      // Add an event listener for form submissions
//      document.getElementById('StudentInfo').addEventListener('submit', function() {
//        var StudentFirst1 = document.getElementById('StudentFirst1').value;
//        var StudentLast1 = document.getElementById('StudentLast1').value;
//        var inputGrade1 = document.getElementById('inputGrade1').value;
//        var inputAge1 = document.getElementById('inputAge1').value;
//        var StudentFirst2 = document.getElementById('StudentFirst2').value;
//        var StudentLast2 = document.getElementById('StudentLast2').value;
//        var inputGrade2 = document.getElementById('inputGrade2').value;
//        var inputAge2 = document.getElementById('inputAge2').value;
        
  
        // Save in localStorage.
//        localStorage.setItem('StudentFirst1', StudentFirst1);
//        localStorage.setItem('StudentLast1', StudentLast1);
  //      localStorage.setItem('inputGrade1', inputGrade1);
 //       localStorage.setItem('inputAge1', inputAge1);
 //       localStorage.setItem('StudentFirst2', StudentFirst2);
 //      // localStorage.setItem('StudentLast2', StudentLast2);
        //localStorage.setItem('inputGrade2', inputGrade2);
      //  localStorage.setItem('inputAge2', inputAge2);
    //  });
  //  }
//  }

(function () {
  'use strict';
  window.addEventListener('load', function () {
      //Bootstrap Valid Form Method
      var forms = document.getElementsByClassName('needs-validation');
      //Do not submit if invalid or save to local storage if valid
      var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              } else {
                  var StudentsFirst1 = document.getElementById('StudentFirst1').value;
                  var StudentsLast1 = document.getElementById('StudentLast1').value;
                  var StudentsAge1 = document.getElementById('StudentAge1').value;
                  var StudentsGrade1 = document.getElementById('StudentGrade1').value;
                  var StudentsFirst2 = document.getElementById('StudentFirst2').value;
                  var StudentsLast2 = document.getElementById('StudentLast2').value;
                  var StudentsAge2 = document.getElementById('StudentAge2').value;
                  var StudentsGrade2 = document.getElementById('StudentGrade2').value;
                  //Local Storage
                  localStorage.setItem('StudentFirst1', StudentsFirst1);
                  localStorage.setItem('StudentLast1', StudentsLast1);
                  localStorage.setItem('StudentAge1', StudentsAge1);
                  localStorage.setItem('StudentGrade1', StudentsGrade1);
                  localStorage.setItem('StudentFirst2', StudentsFirst2);
                  localStorage.setItem('StudentLast2', StudentsLast2);
                  localStorage.setItem('StudentAge2', StudentsAge2);
                  localStorage.setItem('StudentGrade2', StudentsGrade2);
                  //Go to Login
                  window.open("Form.html");
              }
              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();