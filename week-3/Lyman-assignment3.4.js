/*
====================
Title: Exercise 3.4
Author: Ashleigh Lyman
Date: 14 June 2019
Modified by:
Description: Working with loops
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.4 - Loop Statement'));

/*
Expected outcome:

Ashleigh Lyman
Exercise 3.4 - Loop Statement
Current Date

  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
  6 does not match 1!
  6 does match 6!

*/

//Start Program


//Functions
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

function match(a, b) {
  if (a === b){
    return true;
 }
    return false;
}

//Output functions from match()
function logMismatch(a, b) {
  console.log(a + " and " + b + " do not match!");
}

function logMatch(a, b) {
  console.log(a + " and " + b + " do match!");
}

//Declare constant variable to be tested against random number
var constant = 6;

//Output from if statement & for loop. Will iterate 10 times
for (var a = 0; a < 10; a++) {

  var number = randomNumber();

  if (match(constant, number)) {
    logMatch(constant, number);
  } else {
    logMismatch(constant, number);
  }
}

//End Program
