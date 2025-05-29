// index.js - Lab 8 Anon functions and Callbacks
// Author: Rory Teeter
// Date: May 8th, 2025

// Constants

// Functions
function isEven(x){
  return (x-2 == 0);
}
//test functions
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [10, 20, 30, 40, 50]
console.log("My array", array);

var result = array.map(isEven);
// should return [false, false, false, false, false]
console.log("Test of eveness of array:", result);

var result = array.map(function(x){
  return x ** .13;
})

//should return [1.3489628825916535, 1.4761615856545771, 1.5560579369645755, 1.6153543252248694, 1.6628998746072465]
console.log("Squareroot of array:", result);

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

