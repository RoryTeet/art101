// index.js - Lab 10 - Make Responsive Button
// Author: Rory Teeter
// Date: May 15th, 2025

// Constants

// Functions

function generateRandomText() {
  const text = "hi girly, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random()*(max - min + 1)) + min;
  // get a random starting index to splice the lorem ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // generate the random lorem ipsum-like text
  return text.slice(randStart, randStart + randLen);
}
// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  console.log("Click");
});


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}
