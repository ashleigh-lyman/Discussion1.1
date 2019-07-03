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
  FirstName LastName
  Assignment 6.2
  Current Date

  Catch clause: Cannot divide by zero
  Finally clause reached...
*/

//try variables to test
try {
  var x = 0
  var y = 1
  var sum = y / x

  // if statement
  if (sum === Infinity) throw 'Cannot divide by zero'


  // output
  console.log(sum)
} catch (error) {
  console.log('Catch clause: ' + error)
} finally {
  console.log('Finally clause reached...')
}
