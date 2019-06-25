/*
====================
Title: Assignment 4.4 Predicates
Author: Ashleigh Lyman
Date: 24 June 2019
Modified by:
Description: Predicates assignment filtering array
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Exercise 4.4 - Predicates'));

/*
Expected outcome:
Ashleigh Lyman
Exercise 4.4 - Predicates
Current Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa
*/
//Start Program


//Function
function get_Value(index, value){
  for (var x = 0; x < states.length; x++){
    if (index[x] === value) {
      console.log(index[x]);
    }
  }
    return states.sort();
}


//Declare array list of states
const states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];

console.log('\n');


//output original array
console.log('-- ORIGINAL ARRAY --');
  for (var a = 0; a < states.length; a++){
    console.log(states[a]);
  }


console.log('\n');


//Runs array through sort function and displays array sorted
console.log('-- SORTED ARRAY --');
for (var b = 0; b < states.length; b++){
    var sortedStates = states.filter(get_Value);
  console.log(sortedStates[b]);
}


console.log('\n');


//Runs through function and displays selected value
console.log('-- SELECTED VALUE --');

get_Value(states, "Iowa");
