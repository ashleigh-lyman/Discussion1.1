/*
============================================
; Title:  Discussion 6.4 - Nested Literals
; Author: Ashleigh Lyman
; Date:   6 July 2019
; Modified By:
; Description: Nested Literals
;===========================================
*/

//Importing header file
const header = require('./Lyman-header.js');

//Output header
console.log(header.display("Ashleigh", "Lyman", "Assignment 6.4 - Nested Literals"));

/*
Expected Outcome:
Ashleigh Lyman
Assignment 6.4 - Nested Literals
Today's Date

Ticket 1 was created on <current date> and assigned to employee John Doe (Manager).
*/

//Start Program

var ticket = {
  id: 1,
  name: "Program issue #1",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "Low",
  personId: 123,

  person: {
    id: 123,
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Manager"
  }
};

console.log('\n');

console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated
    + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName
        + " (" + ticket.person.jobTitle + ").");
