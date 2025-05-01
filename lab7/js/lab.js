// index.js - Lab 7 Functions
// Author: Rory Teeter
// Date: 05-01-25

// Constants

// Functions

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {
    var userName = window.prompt("Hi. Whats your name, I forgot.");
    console.log("userName =", userName);
    //split array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}


//outputs
function main() {
document.writeIn("oh hey, I fixed your name:",
    sortUserName(), "</br>");
}

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  
