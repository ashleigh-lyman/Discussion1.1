//const header = require('../Vanroekel-header.js')

//console.log(header.display("Faye", "Van Roekel", "Assignment 5.1"));

/*
============================================
; Title:  Assignment 6.1 Objects and Built In Objects
; Author: Faye Van Roekel
; Date:   03 July 2019
; Modified By: Ashleigh Lyman
; Description: Objects and Built In Objects
;===========================================
*/

/*
; Expected Output:
; Faye Van Roekel has blue eyes.
; Odie Van Roekel has green eyes.
*/

// start program

var person = {  //*** Changed (  to a {
    firstName: "Faye",
    lastName: "Van Roekel",
    eyeColor: "blue",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

var person2 = {   //*** Added commas to end of variable
    firstName: "Odie",
    lastName: "Van Roekel",
    eyeColor: "green",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//Output
console.log (person.firstName + " " + person.lastName + " has " + person.eyeColor + " eyes.")
console.log (person2.firstName + " " + person2.lastName + " has " + person2.eyeColor + " eyes.")   //*** Changed person to person2

//end
