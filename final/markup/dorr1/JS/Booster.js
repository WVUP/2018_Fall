<div class="form-group">
                                <select multiple class="form-control" id="StudentSports2">
                                  <option value="">Select All Sports</option>
                                  <option value="Football">Football</option>
                                  <option value="Baseball">Baseball</option>
                                  <option value="Softball">Softball</option>
                                  <option value="Basketball">Basketball</option>
                                  <option value="Volleyball">Volleyball</option>
                                  <option value="Cheerleading">Cheerleading</option>
                                  <option value="Track and Field">Track and Field</option>
                                  <option value="Cross Country">Cross Country</option>
                                  <option value="Wrestling">Wrestling</option>
                                  <option value="Golf">Golf</option>
                                </select>
                              </div>


  
//  Local Storage
window.onload = function () {
    // Check for LocalStorage support.
    if (localStorage) {

        document.getElementById('ParentRegister').addEventListener('submit', function () {

            var ParentsFirst = document.getElementById('ParentFirst').value;
            var ParentsLast = document.getElementById('ParentLast').value;
            var inputsStreet = document.getElementById('inputStreet').value;
            var inputsCity = document.getElementById('inputCity').value;
            var inputsState = document.getElementById('inputState').value;
            var inputsZip = document.getElementById('inputZip').value;
            var inputsEmail = document.getElementById('inputEmail').value;
            var inputsPhone = document.getElementById("inputPhone").value;
            var inputsPasswordConf = document.getElementById("inputPasswordConf").value;


            // Save in localStorage.
            localStorage.setItem('ParentFirst', ParentsFirst);
            localStorage.setItem('ParentLast', ParentsLast);
            localStorage.setItem('inputStreet', inputsStreet);
            localStorage.setItem('inputCity', inputsCity);
            localStorage.setItem('inputState', inputsState);
            localStorage.setItem('inputZip', inputsZip);
            localStorage.setItem('inputEmail', inputsEmail);
            localStorage.setItem('inputPhone', inputsPhone);
            localStorage.setItem('inputPasswordConf', inputsPasswordConf);


        });
    }
}






