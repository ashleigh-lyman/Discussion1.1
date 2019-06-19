/*
====================
Title: Assignment 4.1 Arrays
Author: Ashleigh Lyman
Date: 18 June 2019
Modified by:
Description: Program with array and 2 errors
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 4.1 - Arrays'));

/*
Expected outcome:
Ashleigh Lyman
Exercise 4.1 - Arrays
Current Date

Array(5)  ["Banana", "Apple", "Pineapple", "Orange", "Plum"]

Array(3)  ["Apple", "Pineapple", "Orange"]

Array(2)  ["Banana", "Plum"]

*/

//Start Program


var fruits = ["Banana", "Apple", "Pineapple", "Orange", "Plum"]; //Declare array with 5 elements
console.output(fruits); //Display array contents

var pos = 1, n = 3; //3 items to be removed from list starting from index 1

var removed = fruits.splice(pos, n); //Set new array to removed variable

console.log(removed); //display removed fruits

console.log(fruits; //display array with items removed


//End Program
