// imports MySQL connection call set within variable 'connection.js' file
var connection = require("../config/connection.js");

// helper function for SQL syntax
//... the helper function loops through and creates an array of question marks - and turns it into a string.
function printQuestionMarks(num) {
    var arr = [];
    for(var j=0; j<num; j++) {
        arr.push("?");
    }
    return arr.toString();
}

// 'objToSql', a helper function, that runs to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  // loop through the keys and push the key/value as a string int arr
    for(var key in ob) {
        var value = ob[key];
            // check to skip hidden properties
        if(Object.hasOwnPropert.call(ob, key)) {
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

