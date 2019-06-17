//const header = require('../Vanroekel-header.js')

//console.log(header.display("Faye", "Van Roekel", "Assignment 3.1"));

/*
============================================
; Title:  Assignment 3.1 Control Statements
; Author: Faye Van Roekel
; Date:   11 June 2019
; Modified By: Ashleigh Lyman
; Description: Control Statements 3.1 Assignment with Errors
;===========================================
*/

// start program

var username = ""; //First declare the variable and give it empty value;
if (username == null) { //Add parenthesis around username == null and added brackets around statement
    username = "Faye Van Roekel"  //Added   quotations around Faye Van Roekel
}

    var text = "";

    var i = 11;
while (i < 10) {  //missing first bracket
  text += "<br>The number is " + i;
  i++;
}
// changed output to log
console.log(username + "The number is " + i);

/*=============================================
// End program*/
