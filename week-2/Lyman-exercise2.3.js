/*
============================================
; Title:  exercise2.3.js
; Author: Ashleigh Lyman
; Date:   9 June 2019
; Modified By: Ashleigh Lyman
; Description: Outputs a sentence using a function and function properties.
;===========================================
*/

// Start program

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 2.3 - Function properties'));

/* Expected Outcome

  Hello Ashleigh Lyman!

*/


// Declaring function properties

myName.Ashleigh = "Ashleigh";
myName.Lyman = "Lyman";


// Function

function myName() {
  return myName.Ashleigh + ' ' + myName.Lyman;
}

// Function output

console.log('\n');
console.log('Hello ' + myName() + '!');

// End program
