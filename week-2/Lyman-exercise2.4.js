/*
====================
Title: exercise2.4.js
Author: Ashleigh Lyman
Date: 9 June 2019
Modified by: Ashleigh Lyman
Description: Working with functions
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 2.4 - Functions'));

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>

    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/


// Function will concatenate first and last name
function fullName(firstName, lastName) {

    return firstName + ' ' + lastName;
}


//Function will accept date
function dateWriter(year, month, day) {

    return new Date(year, month, day);

}


//Function will accept and format temperature
function formatNumber(value, fixedPosition) {

  return value.toFixed(fixedPosition);

}


//Function will convert age into an Integer
function convertToInt(value) {

  return parseInt(value);

}



//Function will accept string savings number and format
function convertToFloat(value) {

  return parseFloat(value);

}


//Variables that hold formatted value of functions
var date = dateWriter(2019,5,9);
var temp = formatNumber(65.78, 1);
var age = '26';
var account = '156000';


// output
console.log('\n');
console.log('Hello my name is, ' + fullName('Ashleigh', 'Lyman') + '!');
console.log('\n');
console.log('Today\'s date is ' + date.toLocaleDateString(2019, 06, 09) + ' and the current temperature is ' + temp + ' degrees.');
console.log('\n');
console.log('I am ' + convertToInt(age) + ' years old. And my savings account goal is ' + convertToFloat(account) + ' dollars.');




// end program
