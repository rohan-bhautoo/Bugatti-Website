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

    var username = request.body.regUsername;
    var firstName = request.body.regFirstName;
    var lastName = request.body.regLastName;
    var gender = request.body.gender;
    var emailAddress = request.body.regEmailAddress;
    var password = request.body.regPassword;
    var confirmPassword = request.body.regConfirmPassword;

    if (username && firstName && lastName && gender && emailAddress && password && password == confirmPassword) {
        dbConnection.query('INSERT INTO User VALUES (?, ?, ?, ?, ?, ?)', [username, firstName, lastName, gender, emailAddress, password],
            function(error, result) {
                //Check for errors
                if (error)
                    console.log(error);

                //Output results
                console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);

                response.redirect('/index.html');
        });
    } else if (password !== confirmPassword){
        response.send('Passwords do not match!');
        response.end();
    } else {
        response.send('Error adding user!');
        response.end();
    }
});

app.post('/login', function(request, response) {
    var username = request.body.loginUsername;
    var password = request.body.loginPassword;

    //Output the data sent to the server
    let newUser = request.body;

    //Add user to our data structure
    userArray.push(newUser);

    dbConnection.query('SELECT * FROM User WHERE username = ? AND password = ?', [username, password], function(error, results) {
        if (results.length > 0) {
            request.session.loggedin = true;
            request.session.username = username;

            //Finish off the interaction.
            response.redirect('/index.html');
        } else {
            response.send('Incorrect Username and/or Password!');
        }
        response.end();
    });
});

/*app.get('/home', function(request, response) {
    if (request.session.loggedin) {
        response.send('Welcome back, ' + request.session.username + '!');
    } else {
        response.send('Please login to view this page!');
    }
    response.end();
});*/

app.get('/logout', function (request, response) {
    request.logout();
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

            console.log(carArray.length);
        });

    //Finish off the interaction.
    response.send("Car");
});

app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080);