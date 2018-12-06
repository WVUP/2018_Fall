 window.onload = function() {
    document.getElementById("ParentFirst").value = localStorage.getItem("ParentFirst");
    document.getElementById("ParentLast").value = localStorage.getItem("ParentLast");
    document.getElementById("inputStreet").value = localStorage.getItem("inputStreet");
    document.getElementById("inputCity").value = localStorage.getItem("inputCity");
    document.getElementById("inputState").value = localStorage.getItem("inputState");
    document.getElementById("inputZip").value = localStorage.getItem("inputZip");
    document.getElementById("inputEmail").value = localStorage.getItem("inputEmail");
    document.getElementById("inputPhone").value = localStorage.getItem("inputPhone");
    document.getElementById("StudentFirst1").innerHTML = localStorage.getItem("StudentFirst1");
    document.getElementById("StudentLast1").innerHTML = localStorage.getItem("StudentLast1");
    document.getElementById("inputGrade1").value = localStorage.getItem("inputGrade1");
    document.getElementById("inputAge1").value = localStorage.getItem("inputAge1");
  }
