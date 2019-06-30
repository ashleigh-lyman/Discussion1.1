//const header = require('../Vanroekel-header.js')

//console.log(header.display("Faye", "Van Roekel", "Assignment 5.1"));

/*
============================================
; Title:  Assignment 5.1 Advanced Arrays
; Author: Faye Van Roekel
; Date:   18 June 2019
; Description: Arrays 5.1 Advanced Arrays with Errors
;===========================================
*/
/*
Expected Output:
; [4,5,6,7]
; [2, 8, 18, 32]
*/

// start program

var numArray = [2, 3, 4, 5]
var newnumberArray = numArray.map(numArray => {
    return numArray + 2  //**numItem needs to match numArray. I changed it to match**
});


var array1 = [1, 4, 9, 16];

var map1 = array1.map(x => x * 2);  //Before you used array2.  I changed it to match array1**

console.log(newnumberArray);
console.log(map1);

