const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const dbConnection = require('./Database');

var app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Set up express to serve static files from the directory called 'public'
app.use(express.static('public'));

//Data structure that will be accessed using the web service
let userArray = [];
let carArray = [];

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/register', function(request, response) {

    let newUser = request.body;
    console.log("Data received: " + JSON.stringify(newUser));

    let username = newUser.username;
    let firstName = newUser.firstName;
    let lastName =newUser.lastName;
    let gender = newUser.gender;
    let emailAddress = newUser.email;
    let password = newUser.password;
    let confirmPassword = newUser.confirmPassword;

    if (username && firstName && lastName && gender && emailAddress && password && confirmPassword === password) {
        dbConnection.query('INSERT INTO User VALUES (?, ?, ?, ?, ?, ?)', [username, firstName, lastName, gender, emailAddress, password],
            function(error, result) {
                //Check for errors
                if (error)
                    console.log(error);

                if (result) {
                    //Add user to our data structure
                    userArray.push(newUser);

                    //Output results
                    console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);

                    //Finish off the interaction.
                    response.send("User added successfully.");
                }
            });
    } else if (password !== confirmPassword) {
        response.status(406);
        response.send("Passwords do not match!");
        response.end();
    }
});

app.get('/register', function (request, response) {
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'users' we return all users
    if(pathEnd === 'register'){
        response.send(userArray);
    }

    //If the last part of the path is a valid user id, return data about that user
    else if(pathEnd in userArray){
        response.send(userArray[pathEnd]);
    }

    //The path is not recognized. Return an error message
    else
        response.send("{error: 'Path not recognized'}");
})

app.post('/login', function(request, response) {
    //Output the data sent to the server
    let userLogin = request.body;
    console.log("Data received: " + JSON.stringify(userLogin));

    let username = userLogin.username;
    let password = userLogin.password;

    dbConnection.query('SELECT COUNT(*) as total FROM User WHERE username = ? AND password = ?', [username, password],
        function(error, results) {
            if (error) {
                console.log(error);
            }

            let user = JSON.parse(JSON.stringify(results));

            if (user[0].total > 0) {
                console.log(results);
                request.session.loggedin = true;
                request.session.username = username;

                //Add car to our data structure
                if (userArray.length >= 1) {
                    userArray.length = 0;
                }

                //Add user to our data structure
                userArray.push(userLogin);
                console.log(userArray);

                response.send("Login");
            }
        });
});

app.get('/logout', function (request, response) {
    request.session.destroy();
    response.redirect('/index.html');
});

app.get('/model', function (request, response) {
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'model' we return all models
    if(pathEnd === 'model'){
        response.send(carArray);
    }

    //If the last part of the path is a valid car id, return data about that car
    else if(pathEnd in carArray){
        response.send(carArray[pathEnd]);
    }

    //The path is not recognized. Return an error message
    else
        response.send("{error: 'Path not recognized'}");
});

app.post('/model', function (request, response) {
    //Output the data sent to the server
    let carModel = request.body;
    console.log("Data received: " + JSON.stringify(carModel.CarName));

    dbConnection.query('SELECT * FROM Car, Model WHERE CarName = ? AND Car.ModelID = Model.ModelID', [carModel.CarName],
        function(error, results) {
            if (error)
                console.log(error);

            //Add car to our data structure
            if (carArray.length >= 1) {
                carArray.length = 0;
            }

            carArray.push(results[0]);
        });

    //Finish off the interaction.
    response.send("Car");
});

app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080);