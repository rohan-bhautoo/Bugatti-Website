//Import the express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');

//Create express app and configure it with body-parser
const app = express();
app.use(bodyParser.json());

//Set up express to serve static files from the directory called 'public'
app.use(express.static('public'));

app.listen(8080);

