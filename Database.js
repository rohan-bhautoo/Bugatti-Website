const mysql = require('mysql');

const con = mysql.createConnection({
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

module.exports = con;