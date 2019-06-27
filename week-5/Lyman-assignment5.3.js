/*
====================
Title: Assignment 5.3
Author: Ashleigh Lyman
Date: 27 June 2019
Modified by:
Description: Array object program
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Assignment 5.3 - Array objects'));

/*

  Expected output:
  Ashleigh Lyman
  Exercise 5.3 - Array object
  Current Date


  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/


//Start Program

//Array list of composers
var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },
  {
    firstName: "Wolfgang Anadues",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },
  {
    firstName: "Johann Sebastian",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
];

//Blank line
console.log(" ");

//forEach function to display each element in array list
composers.forEach(function (composer){
    console.log(
      "Last Name: " + composer.lastName + ", " + "Genre: " + composer.genre + ", " + "Rating: " + composer.rating
    );
});
