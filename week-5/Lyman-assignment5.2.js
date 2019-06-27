/*
====================
Title: Discussion 5.2
Author: Ashleigh Lyman
Date: 27 June 2019
Modified by:
Description: Program using forEach function
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Discussion 5.2 - forEach function'));

/*
  Expected output:
  Ashleigh Lyman
  Exercise 5.2 - forEach function
  Current Date


  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

//Start Program

//Declare array list
var foods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];

console.log("");

//forEach function to display array list
foods.forEach(function(food) {
  console.log(food);
});


//End Program
