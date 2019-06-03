/*
====================
Title: Assignment 1.5
Author: Ashleigh Lyman
Date: June 2, 2019
Modified by: 
Description: Assignment 1.5 Create 3 employee records with specific variables
;====================
*/


/* 
Expected outcome: 

*/

//Start Program

//Declare Variables
var firstName1 = "Gina ";
var lastName1 = "Rodriguez";
var address1 = "123 Main Street, Lexington, AZ";
var payRate1 = 14.50;
payRate1 = payRate1.toFixed(1); //Format pay rate to one decimal
var hireDate1 = new Date("01/25/2012");
hireDate1 = hireDate1.toLocaleDateString(); //Format date as 00/00/0000

var firstName2 = "Jensen ";
var lastName2 = "Ackles";
var address2 = "465 Broadway Ave, Dallas, TX";
var payRate2 = 16.50; 
payRate2 = payRate2.toFixed(1); //Format pay rate to one decimal
var hireDate2 = new Date('11/01/2014');
hireDate2 = hireDate2.toLocaleDateString();  //Format date as 00/00/0000

var firstName3 = "Paul ";
var lastName3 = "Rudd";
var address3 = "7242 High Street";
var payRate3 = 15.50;
payRate3 = payRate3.toFixed(1); //Format pay rate to one decimal
var hireDate3 = new Date('08/06/2019');
hireDate3 = hireDate3.toLocaleDateString(); //Format date as 00/00/0000

//Output

console.log("Name: " + firstName1 + lastName1 + '\n' + "Address: " + address1 + '\n' + "Pay: $" + payRate1 + '\n' + "Hire Date: " + hireDate1 + '\n');
console.log("Name: " + firstName2 + lastName2 + '\n' + "Address: " + address2 + '\n' + "Pay: $" + payRate2 + '\n' + "Hire Date: " + hireDate2 + '\n');
console.log("Name: " + firstName3 + lastName3 + '\n' + "Address: " + address3 + '\n' + "Pay: $" + payRate3 + '\n' + "Hire Date: " + hireDate3 + '\n');


//End Program
