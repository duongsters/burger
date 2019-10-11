# burger

# Assignment: Friend Finder

![Screenshot](./public/assets/img/Burger.png)

## Summary:
Burger-Mania, a burger-themed application that renders the situational case where the user could: 1) Choose a burger from an already pre-set choice of 6 burgers I created as samples and 2) Personally add a burger of their choice and have it  added to the ‘burgers’ table database, just like ordering your burger/food through an online application we are used to seeing these days! Burger-Mania was created using basic javascript on node and express, with a SQL database. Express handlebars was also used. Burger-Mania, will allow the user to “devour” (aka “eat”) or “un-devour” the list of displayed burgers by clicking either of the two buttons. Similar to the likely scenario of actually eating a burger, “Burger-Mania” would update the status of the burger being eaten or not by dynamically changing it’s values between the burgers table. The burgers table, located within the “burgers_db” SQL database, will allow the user to view the burgers devoured/eaten within in the top  table displayed within the top webpage, and “un-devoured burgers” list displayed just below the “devoured”.  Once a burger is devoured, just like throwing away your trash of the meal, the user will be able to click on the delete button whenever they plan on removing any burgers from the list whenever they want. Under the "Add a Burger" portion, the user could uniquely add a burger of their choice by entering the name of the new burger or simply reorder a deleted burger from the list by pressing the submit button below the form would dynamically add the burger to list...



Simply put, Burger-Mania will allow users to (in no specific order):

1) Submit a personal burger to the app
2) Eat a burger within the app
3) Re-order a previously deleted burger
4) Delete a burger from the list provided 

![Screenshot](app/images/Screenshot3.png)

## Getting Started:
(1) Clone friend_finder repository via https://github.com/duongsters/friend_finder
(2) Run command line Terminal (or via Gitbash) 'npm install' for required NPMS used within the application
(3) Run command line 'node server.js' to start up the application
(4) Once connected to http://localhost:8080/ from CLI, copy that exact link to URL
(5) Run 'ctrl + c' within the CLI to exit the application entirely

## Technologies Used:
- NPM: I used specifically the Express-Handlebars, mySQL, Express throughout the entire assigment.
- Node.JS: Basically the engine that runs the NPM packages used as stated above.
- Javascript: Basically used within the main files to render the entire application

## Code Snippet:
```html
<body>
    <script>
        var connection = require("../config/connection.js");

// helper function for SQL syntax
//... the helper function loops through and creates an array of question marks - and turns it into a string.
function printQuestionMarks(num) {
    var arr = [];
    for (var j = 0; j < num; j++) {
        arr.push("?");
    }
    return arr.toString();
}

// 'objToSql', a helper function, that runs to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, then add quotations 
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "'" + value);
        }
    }
    // returns array of strings to a single comma-separated string
    return arr.toString();
}


// Object for all our SQL statement functions.
var orm = {
    // callback function 'selectAll' runs by takes in all values from tableInput from burgers_db database and selects all values 'burgers' table
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // 'insertOne' callback function runs by inserting a new burger to the 'burgers' table
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    // 'updateOne' callback function runs by updating a burger from the devoured and un-devoured lists from the 'burgers' table 
    //by changing the values of coloumn values and boolean values of 'devoured'
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });

    },


    // 'updateOne' callback function runs by deleting a burger from the 'burgers' table
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
        </script>
    </body>
```

## Author Links:
[GitHub](https://github.com/duongsters)
[LinkIn](https://www.linkedin.com/in/theandrewduong/)