//Points to a div element where user combo will be inserted.
let carDiv;
let savedDiv;
let addUserResultDiv;
let loginDiv;
let commentDiv;

//Set up page when window has loaded
window.onload = init;

//Get pointers to parts of the DOM after the page has loaded.
function init(){
    carDiv = document.getElementById("carDiv");
    addUserResultDiv = document.getElementById("AddUserResult");
    loginDiv = document.getElementById("userLoginResult");
    commentDiv = document.getElementById("commentDiv");
    savedDiv = carDiv.cloneNode(true);
    loadCar();
}

function reset() {
    carDiv.innerHTML = "";
    $("#carDiv").replaceWith(savedDiv);
}

/* Loads current car model and adds them to the page. */
function loadCar() {
    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Called when data returns from server
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            //Convert JSON to a JavaScript object
            let carArray = JSON.parse(xhttp.responseText);

            //Return if no model
            if(carArray.length === 0)
                return;

            //Build string with user data
            let htmlStr = '<div class="container-fluid p-0">';

            for (let key in carArray) {
                if (carArray[key].CarName === 'Centodieci') {
                    htmlStr += '<div class="col-md-12 centodieciModel">';
                    htmlStr += '<div class="box">';
                    htmlStr += '<img class="img-fluid" src="../Img/centodieciLogo.svg" alt="Centodieci Logo">';
                    htmlStr += '</div>';
                    htmlStr += '<div class="row">';
                    htmlStr += '<div class="col-md-8">';
                    htmlStr += '<video autoplay loop muted>';
                    htmlStr += '<source src="../Video/Centodieci.mp4">';
                    htmlStr += '</video>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-4 description">';
                    htmlStr += '<h2>Reminiscence To An Icon Of Art</h2>';
                    htmlStr += '<p>The Centodieci continues Bugatti’s successful 110-year course of exceptional design ' +
                        'and performance, while reviving the memory of the brand’s recent history. With the Centodieci – ' +
                        'Italian for 110 – Bugatti created a reinterpretation of the epochal EB110, which, when presented ' +
                        'in 1991, was considered the fastest and most extraordinary supercar of its time.</p>';
                    htmlStr += '<p>Inspired by the historical model, the Centodieci pushes all boundaries of imagination with ' +
                        'its breathtaking performance and pioneering design. Featuring a modern interpretation of the classic ' +
                        'wedge shape and with the iconic W16 engine, the Centodieci transports the EB110 gracefully into a new ' +
                        'millennium. The ten limited-edition vehicles are distinguished by their perfect elegance and sculptural ' +
                        'beauty, making the Centodieci a true, tangible work of art.</p>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 slideanim">';
                    htmlStr += '<div class="box">';
                    htmlStr += '<h2 style="color: #4f525a">Specifications</h2>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-4 specs text-center slideanim">';
                    htmlStr += '<p><i class="fas fa-bolt"></i> Horsepower @ RPM:' + carArray[key].Horsepower + ' @ 7000</p>';
                    htmlStr += '<p><i class="fas fa-tachometer-alt"></i> Top Speed: ' + carArray[key].Top_speed + '</p>';
                    htmlStr += '<p><i class="fas fa-cogs"></i> Torque @ RPM: ' + carArray[key].Torque + '</p>';
                    htmlStr += '<p><i class="fas fa-stopwatch"></i> 0-100: ' + carArray[key].zeroTo100 + '</p>';
                    htmlStr += '<p><i class="fas fa-stopwatch"></i> 0-60: ' + carArray[key].zeroTo60 + '</p>';
                    htmlStr += '<p><i class="fas fa-car-battery"></i> Engine: ' + carArray[key].Engine + '</p>';
                    htmlStr += '<p><i class="fas fa-road"></i> Displacement: ' + carArray[key].Displacement + ' </p>';
                    htmlStr += '<p><i class="fas fa-dollar-sign"></i> Price: $' + carArray[key].Price + '</p>';
                    htmlStr += '<p><i class="fas fa-tag"></i> Release Date: ' + carArray[key].Release_Date + '</p>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-4 slideanim">';
                    htmlStr += '<img class="img-fluid" src="../Img/CentodieciImg1.jpg" alt="Centodieci top view">';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-4 imageOverlay slideanim">';
                    htmlStr += '<img class="img-fluid pic2" src="../Img/CentodieciImg2.jpg" alt="Centodieci side view">';
                    htmlStr += '<p>Reviving an artistic dream.</p>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="box col-md-12">';
                    htmlStr += '<h2>Reviews</h2>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="review">';
                    htmlStr += '<div class="commentDiv">';
                    htmlStr += '</div>';
                    htmlStr += '<p>Please enter your review below:</p>';
                    htmlStr += '<form class="form-group" action="/comment" id="commentForm">';
                    htmlStr += '<textarea name="comment" form="commentForm" cols="100" rows="5" placeholder="Enter here..." required>';
                    htmlStr += '</textarea>';
                    htmlStr += '<div class="form-group text-right">';
                    htmlStr += '<button class="btn btn-primary" type="submit"><i class="fas fa-paper-plane"></i> Post</button>';
                    htmlStr += '</div>';
                    htmlStr += '</form>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                } else if(carArray[key].CarName === 'Divo') {
                    htmlStr += '<div class="col-md-12 p-0">';
                    htmlStr += '<img class="img-fluid" src="../Img/DivoImg1.jpg" alt="Divo">';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 Divo">';
                    htmlStr += '<div class="row">';
                    htmlStr += '<div class="col-md-12">';
                    htmlStr += '<div class="box2">'
                    htmlStr += '<h2>Bugatti Divo</h2>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-6 p-5 justify-content-center">';
                    htmlStr += 'The DIVO is the most agile and dynamic car BUGATTI has ever created - a perfect homage ' +
                        'for the 110th anniversary, which will be held in 2019. A monumental driving machine, production ' +
                        'will be strictly limited to just 40 units. Combining heart-stopping acceleration and greater ' +
                        'downforce, it is made to excite – a car built for corners. Thanks to its optimal handling ' +
                        'performance, the DIVO dances nimbly through curves; every bend becomes an exhilarating moment, ' +
                        'a thrill that endures.';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-6 p-5 justify-content-center">';
                    htmlStr += 'The DIVO is a more extreme BUGATTI. It represents a new interpretation of our philosophy ' +
                        '‘form follows performance’ with an uncompromising pursuit of the utmost aerodynamic efficiency. ' +
                        'To shape the future, we have embraced the past. The DIVO harks back to the golden era of ' +
                        'coachbuilding, a proud tradition nearly a century old, by uniting a rolling chassis with a brand ' +
                        'new body. The design is imposingly powerful and striking – unmistakably BUGATTI.';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 slideanim">';
                    htmlStr += '<div class="box2">';
                    htmlStr += '<h2>Specifications</h2>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 specs text-center slideanim">';
                    htmlStr += '<p><i class="fas fa-bolt"></i> Horsepower @ RPM:' + carArray[key].Horsepower + ' @ 7000</p>';
                    htmlStr += '<p><i class="fas fa-tachometer-alt"></i> Top Speed: ' + carArray[key].Top_speed + '</p>';
                    htmlStr += '<p><i class="fas fa-cogs"></i> Torque @ RPM: ' + carArray[key].Torque + '</p>';
                    htmlStr += '<p><i class="fas fa-stopwatch"></i> 0-100: ' + carArray[key].zeroTo100 + '</p>';
                    htmlStr += '<p><i class="fas fa-stopwatch"></i> 0-60: ' + carArray[key].zeroTo60 + '</p>';
                    htmlStr += '<p><i class="fas fa-car-battery"></i> Engine: ' + carArray[key].Engine + '</p>';
                    htmlStr += '<p><i class="fas fa-road"></i> Displacement: ' + carArray[key].Displacement + ' </p>';
                    htmlStr += '<p><i class="fas fa-dollar-sign"></i> Price: $' + carArray[key].Price + '</p>';
                    htmlStr += '<p><i class="fas fa-tag"></i> Release Date: ' + carArray[key].Release_Date + '</p>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 slideanim p-0">';
                    htmlStr += '<img class="img-fluid" src="../Img/DivoImg2.jpg" alt="Divo">';
                    htmlStr += '</div>';
                    htmlStr += '<div class="box2 col-md-12">';
                    htmlStr += '<h2>Reviews</h2>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="review">';
                    htmlStr += '<p>Please enter your review below:</p>';
                    htmlStr += '<form class="form-group" action="" id="commentForm">';
                    htmlStr += '<textarea name="comment" form="commentForm" cols="100" rows="5" placeholder="Enter here..." required>';
                    htmlStr += '</textarea>';
                    htmlStr += '<div class="form-group text-right">';
                    htmlStr += '<button class="btn btn-primary" type="submit"><i class="fas fa-paper-plane"></i> Post</button>';
                    htmlStr += '</div>';
                    htmlStr += '</form>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                } else if(carArray[key].CarName === 'LaVoitureNoire') {
                    htmlStr += '<div class="col-md-12 p-0">';
                    htmlStr += '<img class="img-fluid" src="../Img/LaVoitureNoireImg1.jpg" alt="La Voiture Noire">';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 LaVoitureNoire">';
                    htmlStr += '<h2 class="pl-4">La Voiture Noire</h2>';
                    htmlStr += '<h3 class="pl-4">Reminiscence of an icon</h3>';
                    htmlStr += '<div class="row">';
                    htmlStr += '<div class="col-md-6 p-5 justify-content-center">';
                    htmlStr += '<p>A pioneering spirit, passion for perfection and the desire to continually redefine its ' +
                        'limits have been the key characteristics of BUGATTI since it was founded 110 years ago. None ' +
                        'of the brand’s masterpieces reflect these values more impressively than the Type 57 SC Atlantic. ' +
                        'Created by Ettore Bugatti’s eldest son Jean, the only four Atlantics ever created stand for pure ' +
                        'elegance and sophistication.</p>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-6 p-5 justify-content-center">';
                    htmlStr += '<p>With its homage to the fourth, all-black Atlantic, missing since the Second World War, ' +
                        'BUGATTI is bringing the speed, technology, luxury and aesthetics of an icon into a new era. But ' +
                        'the customised creation of “La Voiture Noire” is far more than a modern interpretation of the ' +
                        'ghost of the gran turismo. “La Voiture Noire” is a tribute to BUGATTI’s own history, a manifesto ' +
                        'of the BUGATTI aesthetic and a piece of automotive haute couture.</p>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 p-0 slideanim">';
                    htmlStr += '<img class="img-fluid" src="../Img/LaVoitureNoireImg2.jpg" alt="La Voiture Noire">';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 specs text-center slideanim">';
                    htmlStr += '<h2>Specifications</h2>';
                    htmlStr += '<p><i class="fas fa-bolt"></i> Horsepower @ RPM:' + carArray[key].Horsepower + ' @ 7000</p>';
                    htmlStr += '<p><i class="fas fa-tachometer-alt"></i> Top Speed: ' + carArray[key].Top_speed + '</p>';
                    htmlStr += '<p><i class="fas fa-cogs"></i> Torque @ RPM: ' + carArray[key].Torque + '</p>';
                    htmlStr += '<p><i class="fas fa-stopwatch"></i> 0-100: ' + carArray[key].zeroTo100 + '</p>';
                    htmlStr += '<p><i class="fas fa-stopwatch"></i> 0-60: ' + carArray[key].zeroTo60 + '</p>';
                    htmlStr += '<p><i class="fas fa-car-battery"></i> Engine: ' + carArray[key].Engine + '</p>';
                    htmlStr += '<p><i class="fas fa-road"></i> Displacement: ' + carArray[key].Displacement + ' </p>';
                    htmlStr += '<p><i class="fas fa-dollar-sign"></i> Price: $' + carArray[key].Price + '</p>';
                    htmlStr += '<p><i class="fas fa-tag"></i> Release Date: ' + carArray[key].Release_Date + '</p>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="col-md-12 p-0 slideanim">';
                    htmlStr += '<img class="img-fluid" src="../Img/LaVoitureNoireImg3.jpg" alt="La Voiture Noire">';
                    htmlStr += '</div>';
                    htmlStr += '<div class="box3 col-md-12">';
                    htmlStr += '<h2>Reviews</h2>';
                    htmlStr += '</div>';
                    htmlStr += '<div class="review">';
                    htmlStr += '<p>Please enter your review below:</p>';
                    htmlStr += '<form class="form-group" action="" id="commentForm">';
                    htmlStr += '<textarea name="comment" form="commentForm" cols="100" rows="5" placeholder="Enter here..." required>';
                    htmlStr += '</textarea>';
                    htmlStr += '<div class="form-group text-right">';
                    htmlStr += '<button class="btn btn-primary" type="submit"><i class="fas fa-paper-plane"></i> Post</button>';
                    htmlStr += '</div>';
                    htmlStr += '</form>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';
                }
            }

            htmlStr += '</div>';

            carDiv.innerHTML = htmlStr;
            window.scrollTo(0, 0);
        }
    };

    //Request data.
    xhttp.open("GET", "/model", true);
    xhttp.send();
}

/* Posts a car to the server. */
function carModel(e) {
    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    // Car object
    let carObj = {
        CarID: "",
        CarName: e.value,
        ModelID: "",
        Horsepower: 0,
        Top_speed: "0mph",
        Torque: 0,
        zeroTo100: "",
        zeroTo60: "",
        Engine: "",
        Displacement: "",
        Price: 0,
        Release_Date: 0
    };

    xhttp.onreadystatechange = function() {
        loadCar();
    };

    //Send model data to server
    xhttp.open("POST", "/model", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(carObj));
}

/* Posts a new user to the server. */
function addUser() {
    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Extract user data
    let username = document.getElementById("regUsername").value;
    let firstName = document.getElementById("regFirstName").value;
    let lastName = document.getElementById("regLastName").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("regEmailAddress").value;
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("regConfirmPassword").value;

    //Create object with user data
    let usrObj = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    //Set up function that is called when reply received from server
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            addUserResultDiv.innerHTML = "<span style='color: green'>User added successfully</span>.";
        } else if (this.responseText === "Passwords do not match!") {
            document.getElementById("regConfirmPassword").value = '';
            addUserResultDiv.innerHTML = "<span style='color: red'>" + this.responseText + "</span>.";
        } else {
            addUserResultDiv.innerHTML = "<span style='color: red'>Error adding user</span>.";
        }
    };

    //Send new user data to server
    xhttp.open("POST", "/register", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send( JSON.stringify(usrObj) );
}

function loadUser() {
    //Set up XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Extract user data
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    //Create object with user data
    let usrObj = {
        username: username,
        password: password
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            loginDiv.innerHTML = "<span style='color: green'>Login successful</span>.";
            document.getElementsByClassName("nav-link")[0].outerHTML = "";
            document.getElementsByClassName("nav-link")[0].outerHTML = "<a class='nav-link' href='/logout'>Logout</a>";
        } else {
            loginDiv.innerHTML = "<span style='color: red'>Error! Account " + usrObj.username + " not found!</span>.";
        }
    };

    //Send new user data to server
    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send( JSON.stringify(usrObj) );
}

function comment() {

}