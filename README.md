<p align="center">
  <img width="300" height="150" src="https://github.com/rohan-bhautoo/Bugatti-Website/blob/master/public/Img/BugattiLogo.png">
</p>
<h1 align="center">Bugatti Website</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-brightgreen.svg" />
  <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" />
  <img alt="MySQL" src="https://img.shields.io/badge/MariaDB-964B00?logo=mariadb&logoColor=white" />
  <img alt="Npm" src="https://img.shields.io/badge/npm->=8.3.1-blue.svg" />
  <img alt="Node" src="https://img.shields.io/badge/node->=16.14.0-blue.svg" />
  <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white&link=https://linkedin.com/in/rohan-bhautoo" />
</p>

> Bugatti Website is a single page web application that was built using Node.js. The page will change based on the user input without reloading. The front end of the website is written in HTML, CSS and JavaScript and it communicates with the back end using AJAX. MariaDB database is connected to the website to store user information and the data is exchanged in JSON format.
> 
> See other images of the website in the [Screenshot](/public/Screenshots) folder.

### 🏠 [Homepage](/public/index.html)
<p align="center">
  <img height="800" src="https://github.com/rohan-bhautoo/Bugatti-Website/blob/master/public/Screenshots/Home.png">
</p>

## Prerequisite

### Node.js
> As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. Download it [here](https://nodejs.org/en/).

### MariaDB
> MariaDB Server is one of the most popular open source relational databases. It’s made by the original developers of MySQL and guaranteed to stay open source. It is part of most cloud offerings and the default in most Linux distributions. Download it [here](https://mariadb.org/download/).
> 
> The following tables will be used to store information in the database.

<table align="center">
  <tr>
    <th>User</th>
    <th>Car</th>
    <th>Model</th>
  </tr>
  <tr><td>
         
| Username (PK) | 
| ------------- |
| FirstName     |   
| LastName      |   
| DOB           |
| Telephone     |
| EmailAddress  |
| Password      |
      
</td><td>
      
| CarID (PK)   |
| ------------ |
| Description  |
| ModelID (FK) |
      
</td><td>
    
| ModelID (PK) |
| ------------ |
| Name         |
| TopSpeed     |
| Performance  |
| Weight       |
    
</td></tr>
</table>

## Usage
> After installing MariaDB, import the table from [SQL](/public/SQL/Website.sql), in the database, using the following command.

```sh
mysql -u root -p
```

```sh
source C:\[Path to folder]\public\SQL\Website.sql
```

> Then, run the web application, in a browser, using node command.

```sh
node Server
```

## Author

👤 **Rohan Bhautoo**

* Github: [@rohan-bhautoo](https://github.com/rohan-bhautoo)
* LinkedIn: [@rohan-bhautoo](https://linkedin.com/in/rohan-bhautoo)

## Show your support

Give a ⭐️ if this project helped you!
