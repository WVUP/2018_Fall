window.onload=function() {
	
	// Fills text boxes/etc on load so less typing
	document.getElementById('firstName').setAttribute('value', 'FakeFirst');
	document.getElementById('lastName').setAttribute('value', 'FakeLast');
	document.getElementById('address').setAttribute('value', '600 Fake Street');
	document.getElementById('address2').setAttribute('value', '100 Fake Suite');
	document.getElementById('zip').setAttribute('value', '26105');
	
	document.getElementById('profileForm').onsubmit=function() {
		window.location.replace('student.html');
    return false;
	}
}