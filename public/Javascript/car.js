//Points to a div element where user combo will be inserted.
let carDiv;

//Set up page when window has loaded
window.onload = init;

//Get pointers to parts of the DOM after the page has loaded.
function init(){
    carDiv = document.getElementById("carDiv");
    loadCar();
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
            let htmlStr = '<div class="container-fluid">';

            for (let key in carArray) {
                if (carArray[key].model === 'Centodieci') {
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
                    htmlStr += '<p><i class="fas fa-bolt"></i> Horsepower @ RPM: 1600 @ 7000</p>';
                    htmlStr += '<p><i class="fas fa-tachometer-alt"></i> Top Speed: 236mph</p>';
                    htmlStr += '<p><i class="fas fa-cogs"></i> Torque @ RPM: 1180</p>';
                    htmlStr += '<p><i class="fas fa-stopwatch"></i> 0-100: 6.1s</p>';
                    htmlStr += '<p><i class="fas fa-stopwatch"></i> 0-60: 2.4s</p>';
                    htmlStr += '<p><i class="fas fa-car-battery"></i> Engine: W16</p>';
                    htmlStr += '<p><i class="fas fa-road"></i> Displacement: 8.0L</p>';
                    htmlStr += '<p><i class="fas fa-dollar-sign"></i> Price: $9million</p>';
                    htmlStr += '<p><i class="fas fa-tag"></i> Release Date: 2020</p>';
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
                    htmlStr += '<p>Please enter your review below:</p>';
                    htmlStr += '<form action="" id="commentForm">';
                    htmlStr += '<textarea name="comment" form="commentForm" cols="100" rows="5" placeholder="Enter here...">';
                    htmlStr += '</textarea>';
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
        model: e.value
    };

    xhttp.onreadystatechange = function() {
        loadCar();
    };

    //Send model data to server
    xhttp.open("POST", "/model", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send( JSON.stringify(carObj) );
}