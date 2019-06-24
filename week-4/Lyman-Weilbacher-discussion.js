/*
============================================
; Title:  Weilbacher-Discussion-4.1.js
; Author: Andrew Weilbacher
; Date:   20 June 2019
; Modified By: Ashleigh Lyman
; Description: Displays a formatted header and output of example array methods.
;===========================================
*/


//const header = require('./Weilbacher-header.js');
//console.log(header.display("Andrew", "Weilbacher", "Discussion 4.1"));
var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Discussion Reply 4.1'));


// start program

/*
    Expected output:
    Ashleigh Lyman
    Discussion Reply 4.1
    Current Date
    Mango
    5
*/


//Display specified array element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"
console.log(x);


//Display number of array elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var y = fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
console.log(y);
