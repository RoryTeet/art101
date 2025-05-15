// index.js - Lab 10 - Make Responsive Button
// Author: Rory Teeter
// Date: May 15th, 2025

// Constants

// Functions


function generateRandomText() {
  const text = "Here is random text for you to see";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
});

// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');

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
