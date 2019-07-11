/*
;===========================================================================================================================================
; Title:  Assignment 7.2
; Author: Ashleigh Lyman
; Date:   11 July 2019
; Modified By:
; Description: Display array of employees with object constructor function
;===========================================================================================================================================
*/

/*
  Expected output:

  Ashleigh Lyman
  Exercise 7.2
  Current Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//Start Program

//Importing header file
const header = require('./Lyman-header.js');

//Output header
console.log(header.display("Ashleigh", "Lyman", "Assignment 7.2 - Employee list from constructor object"));


//Employee constructor object with properties
function Employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}


//Array with 5 employees
var employees = [
    new Employee(1, "Thomas", "Edison", "Software Engineer"),
    new Employee(2, "Benjamin", "Franklin", "Programmer"),
    new Employee(3, "Nikola", "Tesla", "Project Manager"),
    new Employee(4, "Charles", "Babbage", "Product Manager"),
    new Employee(5, "Alexander", "Bell", "Business Analyst")
];


//Create line break
console.log('\n');

//Output with forEach method
employees.forEach(function(emp) {
    console.log(emp.id + " " + emp.firstName + " " + emp.lastName + " " + emp.title);
});


//End Program
