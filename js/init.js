// code from:http://materializecss.com/modals.html#!
// additional help from: http://stackoverflow.com/questions/41626343/materialized-modal-not-displaying
// parallax code from: http://materializecss.com/parallax.html
// this initializes all modals so they can be triggered
$(document).ready(function() {
  //initializing code goes here!
  $(".dropdown-button").dropdown({ hover: false });
  // code from:http://materializecss.com/modals.html#!
  // additional help from: http://stackoverflow.com/questions/41626343/materialized-modal-not-displaying
  // this initializes all modals so they can be triggered
  $('.modal').modal();
  // parallax code from: http://materializecss.com/parallax.html
  $('.parallax').parallax();
});
