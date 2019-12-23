describe('calculateScorescore', function() {
  let createGame = require('../../lib/jasmine_examples/Bowling');
  let calculateScore = require('../../lib/jasmine_examples/CalculateScore');

  let params = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=1&F1R2=1&F2R1=1&F2R2=1&F3R1=1&F3R2=1&F4R1=1&F4R2=1&F5R1=1&F5R2=1&F6R1=1&F6R2=1&F7R1=1&F7R2=1&F8R1=1&F8R2=1&F9R1=1&F9R2=1&F10R1=1&F10R2=1&F10R3=1");

  // it('adds up the score in a single frame', function() {
  //   // console.log(createGame(params))
  // expect(calculateScore(createGame(params))).toEqual(5)
  // })

  it('adds up the score in 10 frames without strikes and spares', function() {
  expect(calculateScore(createGame(params))).toEqual(21)
  })
})
