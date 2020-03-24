let addUserResultDiv;

window.onload = init;

//Get pointers to parts of the DOM after the page has loaded.
function init(){
    addUserResultDiv = document.getElementById("AddUserResult");
}

function addUser() {
    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //User data
    let username = document.getElementById("regUsername").value;
    let firstName = document.getElementById("regFirstName").value;
    let lastName = document.getElementById("regLastName").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("regEmailAddress").value;
    let password = document.getElementById("regPassword").value;

    //Create object with user data
    let usrObj = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      email: email,
      password: password
    };

    //Set up function that is called when reply received from server
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            addUserResultDiv.innerHTML = "<span style='color: green'>User added successfully</span>.";
        } else {
            addUserResultDiv.innerHTML = "<span style='color: red'>Error adding user</span>.";
        }
    }

    //Send new user data to server
    xhttp.open("POST", "/users", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send( JSON.stringify(usrObj) );
}