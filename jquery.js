// let createScoreCard = require('./lib/jasmine_examples/scoreCard');
// let createScore = require('./lib/jasmine_examples/calculateScore');

// $(document).ready(function() {
window.onload = function() {

  $("#trigger").click(function() {
    // calculateScore(createScoreCard(URLSearchParams(window.location.search)))
      $("div.score").text(calculateScore(createScoreCard(URLSearchParams(window.location.search))));
});
};
