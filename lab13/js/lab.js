// index.js - Lab 13 make a loop
// Author: Rory Teeter
// Date: May 26th 2025

// Constants

// Functions
// Use a for loop to print all the numbers from 1 to 100. Test and debug.
function whatHappensOnClick() {
    console.log("click");

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 

    for (let i = 1; i <= 200; i++) {
      let message = "";

      if (i % 7 === 0 && i % 2 === 0) {
        message = "Boom!";
      } else if (i % 5 === 0) {
        message = "Buzz!";
      } else if (i % 3 === 0) {
        message = "Fizz!";
      } else {
        message = i;
      }

      const p = document.createElement("p");
      p.textContent = message;
      outputDiv.appendChild(p);
    }
  }

  // Attach the click event using jQuery
  $(document).ready(function () {
    $("#button").click(whatHappensOnClick);
  });



// let's get this party started
main();
