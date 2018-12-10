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
                  var StudentsSports1 = $('#StudentSports1').val();
                  var StudentsFirst2 = document.getElementById('StudentFirst2').value;
                  var StudentsLast2 = document.getElementById('StudentLast2').value;
                  var StudentsAge2 = document.getElementById('StudentAge2').value;
                  var StudentsGrade2 = document.getElementById('StudentGrade2').value;
                  var StudentsSports2 = $('#StudentSports2').val();
                  
                  
                  //Local Storage
                  localStorage.setItem('StudentFirst1', StudentsFirst1);
                  localStorage.setItem('StudentLast1', StudentsLast1);
                  localStorage.setItem('StudentAge1', StudentsAge1);
                  localStorage.setItem('StudentGrade1', StudentsGrade1);
                  localStorage.setItem('StudentSports1', StudentsSports1);
                  localStorage.setItem('StudentFirst2', StudentsFirst2);
                  localStorage.setItem('StudentLast2', StudentsLast2);
                  localStorage.setItem('StudentAge2', StudentsAge2);
                  localStorage.setItem('StudentGrade2', StudentsGrade2);
                  localStorage.setItem('StudentSports2', StudentsSports2);
                  //Go to Login
                  window.open("Form.html");
              }
              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();





