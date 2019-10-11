// imports MySQL connection call set within variable 'connection.js' file
var connection = require("../config/connection.js");

// helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];
    for(var j=0; j<num; j++) {
        arr.push("?");
    }
    return arr.toString();
}
