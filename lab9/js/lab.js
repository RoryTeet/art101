// index.js - Lab 9 JQuery and Libraries
// Author: Rory Teeter
// Date: May 11th, 2025

// Constants

// Functions

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  console.log("clicked");
  $(this).toggleClass("special");

});

  // now add (or subtract) the "special" class to the section
  $("#button-challenge").toggleClass("special");




// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}
