// index.js - Lab 7 Functions
// Author: Rory Teeter
// Date: 05-01-25

// Constants

// Functions

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
    let userName = window.prompt("Please remind me of your name")
    console.log("userName=", userName)
  
    let nameArray = userName.split('');
    console.log("nameArray = ", nameArray)
  
    let sortedNameArray = nameArray.sort();
    console.log("sortedNameArray= ", sortedNameArray)
  
    nameSorted = sortedNameArray.join('')
    console.log("nameSorted= ", nameSorted)
  
    return nameSorted
  }
  
  // output 
  let func = sortUserName();
  document.writeln("Here is your sorted name: ", func, "</br>")


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
