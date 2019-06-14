/*
====================
Title: Exercise 3.2
Author: Ashleigh Lyman
Date: 14 June 2019
Modified by:
Description: Match function
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 3.2'));


/*
Expected outcome:

Ashleigh Lyman
Exercise 3.2
Current Date

false
true
false

Truck and Car do not match!
Bike and Bike do match!
Four and Three do not match!

*/

//Start Program

//variables to be tested
var testValue1 = "Truck";
var testValue2 = "Car";
var testValue3 = "Bike";
var testValue4 = "Bike";
var testValue5 = "Four";
var testValue6 = "Three";


//functions

function match(value1, value2) {
    if (value1 === value2)
        return true;
    else
        return false;
}

function logMismatch(value1, value2) {
    console.log(value1 + " and " + value2 + " do not match!");
}

function logMatch(value1, value2) {
    console.log(value1 + " and " + value2 + " do match!");
}


//Output from match function
console.log(match(testValue1, testValue2) + '');
console.log(match(testValue3, testValue4) + '');
console.log(match(testValue5, testValue6) + '\n');

//"if conditional  "if else" statements else =" statements. Include checks for all 6 variables.
if (match(testValue1, testValue2)) {
    logMatch(testValue1, testValue2);
}
else {
    logMismatch(testValue1, testValue2);
}

if (match(testValue3, testValue4)) {
    logMatch(testValue3, testValue4);
}
else {
    logMismatch(testValue3, testValue4);
}

if (match(testValue5, testValue6)) {
    logMatch(testValue5, testValue6);
}
else {
    logMismatch(testValue5, testValue6);
}


//End Program
