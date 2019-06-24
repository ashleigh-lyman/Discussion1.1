
/*
============================================
; Title:  Discussion 4.1
; Author: Brittany Dockter
; Date:   20 June 2019
; Modified by: Ashleigh Lyman
; Description: A simple program using Arrays that contain two errors.
;===========================================
*/

// Begin Header
//var header = require('C:/Users/Brittany/Documents/WEB231/bu-webdev/web-231/week-2/Dockter-header-test');
// End Header

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Discussion Reply 4.1'));

/* Expected Output
Ashleigh Lyman
Discussion Reply 4.1
Current Date
My favorite food is chicken
*/

// Begin Program

var myFavorite = "My favorite food is "  //"myfavorite didn't match myFavorite"
var meat = ["steak", "chicken", "pork"];
meat[1]  //Removed quotation marks and changed the array index number to match the expected outcome


// Output

console.log(myFavorite, meat[1]);
