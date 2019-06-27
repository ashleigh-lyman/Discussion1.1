/*
====================
Title: Discussion 5.4
Author: Ashleigh Lyman
Date: 27 June 2019
Modified by:
Description: Filtering/Reducing complex structures
;====================
*/

// Importing and outputting header file required for all JS assignments

var header = require('./Lyman-header.js');
console.log(header.display('Ashleigh', 'Lyman', 'Discussion 5.4 - Filtering structures'));

/*
Expected Outcome:
Ashleigh Lyman
Assignment 5.4 - Filtering structures
Current Date

-- COMPOSER BY RATING --
Rating: 8
Composer: Beethoven
Rating: 10
Composer: Mozart
Rating: 9
Composer: Bach
Rating: 6
Composer: Haydn
Rating: 5
Composer: Schubert

-- COMPOSER BY GENRE --
Genre: Classical
Composer: Beethoven
Genre: Classical
Composer: Mozart
Genre: Classical
Composer: Bach
Genre: Classical
Composer: Haydn
Genre: Classical
Composer: Schubert
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


//Declare variables using map function
var ratings = composers.map(function(composer){
  return "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName;
});

var genre = composers.map(function(composer){
  return "Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName;
});


//Output
console.log("");

console.log("--COMPOSER BY RATING--");
  ratings.forEach(function(value, index, array) {
console.log(value);
})

console.log("");

console.log("--COMPOSER BY GENRE--");
genre.forEach(function(value, index, array){
  console.log(value);
});


//End Program
