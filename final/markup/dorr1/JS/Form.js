window.onload = function () {
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
  document.getElementById("StudentGrade1").innerHTML = localStorage.getItem("StudentGrade1");
  document.getElementById("StudentAge1").innerHTML = localStorage.getItem("StudentAge1");
  document.getElementById("StudentSports1").innerHTML = localStorage.getItem("StudentSports1");
  document.getElementById("StudentFirst2").innerHTML = localStorage.getItem("StudentFirst2");
  document.getElementById("StudentLast2").innerHTML = localStorage.getItem("StudentLast2");
  document.getElementById("StudentGrade2").innerHTML = localStorage.getItem("StudentGrade2");
  document.getElementById("StudentAge2").innerHTML = localStorage.getItem("StudentAge2");
  document.getElementById("StudentSports2").innerHTML = localStorage.getItem("StudentSports2");

  let num1 = document.getElementsByName("StudentSports1")[0].value = "50";
  let num2 = document.getElementsByName("StudentSports2")[0].value = "40";
  let sum = Number(num1) + Number(num2);
  document.getElementsByName("sum")[0].value = sum;

}
