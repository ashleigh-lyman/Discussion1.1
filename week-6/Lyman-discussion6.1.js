/*
============================================
; Title:  Discussion 6.1 Objects
; Author: Ashleigh Lyman
; Date:   2 July 2019
; Modified By:
; Description: Works with objects within program has 2 errors
;===========================================
*/

//Importing header file
const header = require('./Lyman-header.js');

//Output header
console.log(header.display("Ashleigh", "Lyman", "Discussion 6.1 - Object program with 2 errors"));

/* Expected Outcome:
Ashleigh Lyman
Discussion 6.1 - Object program with 2 errors
Current Date

--Employee--
First Name: Jensen
Last Name: Ackles
Title: Manager
Hourly Rate: 11.20
Hire Date: 07/02/2019

*/


//Start Program

console.log("\n");


//getEmployee Function will concatenate output display
function getEmployee() {
  if(employee == ""){
    return "Must enter employee name";
  }else{
    return "--Employee--" + "\n" + "First Name: " + employee.firstName + "\n" + "Last Name: " + employee.lastName + "\n" + "Title: " + employee.title + "\n" + "Hourly Rate: " + employee.payRate + "\n" + "Hire Date: " + employee.hireDate;
  }
};

//Set variables
var employee = {
  firstName: "Jensen";
  lastName: "Ackles",
  title: "Manager",
  payRate: "11.20",
  hireDate: "07/02/2019",
});

//Call Function and display output
console.log(getEmployee(employee));
