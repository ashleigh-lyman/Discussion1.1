/*
====================
Title: Exercise 3.3
Author: Ashleigh Lyman
Date: 14 June 2019
Modified by:
Description: Working with switch statements
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.3 - Switch Statement'));

/*
Expected outcome:

Ashleigh Lyman
Exercise 3.3 - Switch Statement
Current Date

Output from pressed key -
Enter key was pressed

*/

//Start Program

//Declare and assign default variable
let eventKeyCode = 13


//Switch Statement
switch(eventKeyCode) {

  case 13:
    console.log("\n The enter key was pressed.");
  break;

  case 16:
    console.log("\n The shift key was pressed.");
  break;

  case 32:
    console.log("\n The spacebar was pressed.");
  break;

  case 8:
    console.log("\n The backspace / delete key was pressed.")
  break;

  default:
    console.log("\n Unrecognized key was pressed.");
  break;

}
//End Program
