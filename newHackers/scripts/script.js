/**
 * Code to be executed when the DOM is ready
 */
document.addEventListener("DOMContentLoaded", function () {
  fetchJSONData();
});

/**
 * global array of players information. There are two main parts
 * to this exercise: 1) create a list 2) use a form to show player
 * information
 *
 * removed 'golfer' unnecessary variable
 */

let players = new Map();
