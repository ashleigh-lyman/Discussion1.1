/*
============================================
; Title:  rattanavilay-discussion-5.1.js
; Author: Thip Rattanavilay
; Date:   2 July 2019
; Modified By: Ashleigh Lyman
; Description: Demonstrate properties and value
;===========================================
*/

/*
Thip Rattanavilay
Discussion 5.1 - Week 5
Date: 6/19/2019

*/



//start program

// Imported the header file for this exercise 6.1 - Week 5
//const header = require('../rattanavilay-header.js');

// Output
//console.log(header.display('Thip', 'Rattanavilay', 'Discussion 6.1 - Week 6'));


// new line
console.log("\n")


//****Changed car to an uppercase Car
const Car = function(color, model, dateManufactured) { //const 'Car' has been declared with color, model and dateManufactured as value
  this.color = color;
  this.model = model;
  this.dateManufactured = dateManufactured;
  };
  Car.prototype.getColor = function() { // Add the getColor method to the Car prototype property
      return this.color;  //***mission r on the word return
  };
  Car.prototype.getModel = function() { // Add the getColor method to the Car prototype property
      return this.model;
  };
  Car.prototype.carDate = function() { // Add the getDate method to the Car prototype property
      return `This ${this.model} was manufactured in the year ${this.dateManufactured}`
  }
  let firstCar = new Car('Silver', 'Civic', '1997'); // let the firstCar, prototype to new Car thus inheriting
console.log(firstCar);
console.log(firstCar.carDate()); //output This Civic was manufactured in the year 1997.

// end program
