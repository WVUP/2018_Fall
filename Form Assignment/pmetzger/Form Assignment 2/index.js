/*  Preston Metzger
    9.28/18
    JavaScript Assignment
*/

var issue = prompt("What is your current issue?");
if (issue != null) {
  alert(
    "Fixing now. Beep boop beep boop *********** Issue resolved!!         Fixed problem: " +
      issue
  );
} else {
  alert("What's up with the funny business!");
}

var issues = [];
document.getElementById("submit-button").onclick = renderIssues;

function renderIssues(event) {
  event.preventDefault();
  var issueElement = document.getElementById("computer-issue-select");
  var issue = issueElement.options[issueElement.selectedIndex].text;
  var department = "";
  if (document.getElementById("hr-button").checked) {
    department = document.getElementById("hr-button").value;
  } else if (document.getElementById("it-button").checked) {
    department = document.getElementById("it-button").value;
  } else if (document.getElementById("mg-button").checked) {
    department = document.getElementById("mg-button").value;
  }
  var date = document.getElementById("date-input").value;

  issues.push({
    issue: issue,
    department: department,
    date: date
  });
  document.getElementsByTagName("tbody")[0].innerHTML = "";
  for (var i = 0; i < issues.length; i++) {
    var newRow =
      "<tr><td>" +
      issue +
      "</td><td>" +
      department +
      "</td><td>" +
      date +
      "</td></tr>";
    document.getElementsByTagName("tbody")[0].innerHTML += newRow;
  }
  alert(
    "We have received your issue. Our technicians will be looking at it soon."
  );
}
