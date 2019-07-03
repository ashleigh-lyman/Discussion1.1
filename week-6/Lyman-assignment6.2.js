/*
============================================
; Title:  Discussion 6.2 - Exception handling
; Author: Ashleigh Lyman
; Date:   2 July 2019
; Modified By:
; Description: try/catch/finally statements throw an error
;===========================================
*/

//Importing header file
const header = require('./Lyman-header.js');

//Output header
console.log(header.display("Ashleigh", "Lyman", "Assignment 6.2 - Exception handling"));

/*
  Expected output:
  Ashleigh Lyman
  Assignment 6.2 - Exception handling
  Current Date

  Catch clause: Wrong name given
  Finally clause reached...

*/

console.log('\n');

try {

var firstName = "John";

  // if statement
  if (firstName != "Tom") throw 'Wrong name given'


  // output
  console.log(firstName)
} catch (error) {
  console.log('Catch clause: ' + error)
} finally {
  console.log('Finally clause reached...')
};

//End Program
