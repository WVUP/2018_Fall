function Reset() {
    confirm("Are you sure you want to start over!");
}

function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#confpassword").val();

    if (password != confirmPassword)
        $("#CheckPasswordMatch").html("Passwords do not match!");
    else
        $("#CheckPasswordMatch").html("");
}

$(document).ready(function () {
   $("#password, #confpassword").keyup(checkPasswordMatch);
});
