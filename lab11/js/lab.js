// index.js - Lab 11 we are making an events and fors
// Author: Rory Teeter
// Date: May 18th, 2025

// Constants

// Functions

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function() {
  // get value of input field
  const userName = $("#user-name").val();

  // now let's sort it
  const userNameSorted = sortString(userName);

  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});


function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
