//Import the express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//Create a connection object with the user details
var con = mysql.createConnection({
    host: "localhost",
    user: "Rohan",
    password: "password",
    database: "Website"
});

//Connect to the database
con.connect(
    //This function is called when the connection is attempted
    function(err) {
        if (err) throw err;//Check for errors

        //Output results
        console.log("Connected!");
    }
);


//Create express app and configure it with body-parser
const app = express();
app.use(bodyParser.json());

//Set up express to serve static files from the directory called 'public'
app.use(express.static('public'));

//Data structure that will be accessed using the web service
let userArray = [];

//Set up application to handle GET requests sent to the user path
app.get('/users/*', handleGetRequest);//Returns user with specified ID
app.get('/users', handleGetRequest);//Returns all users

//Set up application to handle POST requests sent to the user path
app.post('/users', handlePostRequest);//Adds a new user

app.listen(8080);

//Handles GET requests to our web service
function handleGetRequest(request, response){
    //Split the path of the request into its components
    var pathArray = request.url.split("/");

    //Get the last part of the path
    var pathEnd = pathArray[pathArray.length - 1];

    //If path ends with 'users' we return all users
    if(pathEnd === 'users'){
        response.send(userArray);
    }

    //If the last part of the path is a valid user id, return data about that user
    else if(pathEnd in userArray){
        response.send(userArray[pathEnd]);
    }

    //The path is not recognized. Return an error message
    else
        response.send("{error: 'Path not recognized'}");
}

//Handles POST requests to our web service
function handlePostRequest(request, response){
    //Output the data sent to the server
    let newUser = request.body;

    //Add user to our data structure
    userArray.push(newUser);

    if (newUser.gender === 'Male') {
        newUser.gender = 'M';
        userArray.push(newUser);
    } else if (newUser.gender === 'Female') {
        newUser.gender = 'F';
        userArray.push(newUser);
    }

    var sql = "INSERT INTO User (Username, FirstName, LastName, Gender, EmailAddress, Password)" +
        " VALUES ('" + newUser.username + "', '"
        + newUser.firstName + "', '"
        + newUser.lastName + "', '"
        + newUser.gender + "', '"
        + newUser.email + "', '"
        + newUser.password + "')";

    //Execute the query
    con.query(sql, function (err, result) {

        //Check for errors
        if (err)
            console.log(err);

        //Output results
        console.log(result.affectedRows + ' rows updated. ID is ' + result.insertId);
    });

    //Finish off the interaction.
    response.send("User added successfully.");
}

