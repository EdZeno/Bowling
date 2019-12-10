describe('calculateScorescore', function() {
  let createGame = require('../../lib/jasmine_examples/Bowling');
  let calculateScore = require('../../lib/jasmine_examples/CalculateScore');

  let params = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=1&F1R2=4&F2R1=4&F2R2=5&F3R1=6&F3R2=4&F4R1=5&F4R2=5&F5R1=10&F5R2=0&F6R1=0&F6R2=1&F7R1=7&F7R2=3&F8R1=6&F8R2=4&F9R1=10&F9R2=0&F10R1=2&F10R2=8&F10R3=6");

  it('it adds up the score in a single frame', function() {
    // console.log(createGame(params))
  expect(calculateScore(createGame(params))).toEqual(5)
  })
})
