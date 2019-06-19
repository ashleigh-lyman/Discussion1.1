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
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 4.2 - Arrays'));

/*
Expected outcome:
Ashleigh Lyman
Exercise 4.2 - Arrays
Current Date

*/

//Start Program


//Declare array with 5 fruits any order
var fruits = ["\n", "Banana", "Apple", "Orange", "Pineapple", "Peach"];


//Functions
function getFruit(array){
  for(var a = 0; a < array.length; a++){
    console.log(array[a]);
  }
}


//Output Fruit list array
getFruit(fruits);

//End Program
