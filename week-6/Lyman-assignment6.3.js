
/*
============================================
; Title:  Discussion 6.3 Object Literals
; Author: Ashleigh Lyman
; Date:   6 July 2019
; Modified By:
; Description: Working with object literals
;===========================================
*/

//Importing header file
const header = require('./Lyman-header.js');

//Output header
console.log(header.display("Ashleigh", "Lyman", "Discussion 6.3 - Object Literals "));

/*
  Expected output:
  Ashleigh Lyman
  Exercise 6.3 - Object Literals
  Today's Date

  Id Number: 100, Name: Help Desk, Requester: Jane Doe
*/

//Start Program

var ticket = {
  id: "100",
  name: "Help Desk",
  requestor: "Jane Doe",

};

// Output
console.log('\n' + 'Id Number: ' + ticket.id + ', Name:  ' +ticket.name + ', Requester: '+ticket.requestor);

//End Program
