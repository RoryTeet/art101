// index.js - make an array and object variable on JavaScript
// Author: Rory Teeter
// Date: 04/27/25

// Constants

// Functions

let myTransport = ["bus", "car", "walk"];

var myMainRide = {
  make: "Metro Bus",
  model: "City Bus",
  color: "white and blue",
  year: 2014,
  age: function() {
      return 2025 - this.year;
  }
}

//outputs

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
