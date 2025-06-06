// index.js - Lab 16 JSON and APIs
// Author: Rory Teeter
// Date: 06/05/25

// Constants

// Functions
// Using the core $.ajax() method
$.ajax({
  url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/987/info.0.json", // Using CORS proxy
  type: "GET",
  dataType: "json",
  success: function(data) {
      console.log(data); // Check in browser console
      // Add to #comic-container, not <body> directly
      $("#comic-container").append(`<h3>${data.title}</h3>`);
      $("#comic-container").append(`<img src="${data.img}" alt="${data.alt}" title="${data.alt}">`);
  }, 
  error: function(jqXHR, textStatus, errorThrown) {
      console.error("Error:", textStatus, errorThrown);
      $("#comic-container").text("Could not load XKCD comic. Check console.");
  }
});
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

// let's get this party started
main();
