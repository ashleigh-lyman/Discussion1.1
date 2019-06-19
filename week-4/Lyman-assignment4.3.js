/*
====================
Title: Assignment 4.3 Filtering
Author: Ashleigh Lyman
Date: 18 June 2019
Modified by:
Description: Filtering assignment
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 4.3 - Filtering'));

/*
Expected outcome:
Ashleigh Lyman
Exercise 4.3 - Filtering
Current Date
*/

//Start Program

//Declaring Vehicles array
var vehicles = ["Car", "Truck", "Van", "Motorcycle", "Bus"];


//Function
function getValue(array, value) {
  for(var a = 0; a < array.length; a++) {
    if(array[a] === value) {
      console.log(array[a]);

    }

  }
}

//Empty line
console.log("");

//Output array list
console.log("--DISPLAYING ARRAY ITEMS--")
for(var b = 0; b < vehicles.length; b++) {
  console.log(vehicles[b]);
}

//Empty line
console.log("");


//Output selected array item
console.log("--SELECTED ITEM");
getValue(vehicles, "Motorcycle");


//Empty line
console.log("");

//Output selected array item
console.log("--SELECTED ITEM");
getValue(vehicles, "Bus");

//End Program
