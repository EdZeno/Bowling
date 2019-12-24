describe('calculateScorescore', function() {
  let createScoreCard = require('../../lib/jasmine_examples/scoreCard');
  let calculateScore = require('../../lib/jasmine_examples/calculateScore');

  let params = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=1&F1R2=1&F2R1=1&F2R2=1&F3R1=1&F3R2=1&F4R1=1&F4R2=1&F5R1=1&F5R2=1&F6R1=1&F6R2=1&F7R1=1&F7R2=1&F8R1=1&F8R2=1&F9R1=1&F9R2=1&F10R1=1&F10R2=1&F10R3=1");
  it('adds up the score in 10 frames without strikes and spares', function() {
    expect(calculateScore(createScoreCard(params))).toEqual(21)
  })

  let inputStrike = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=10&F1R2=0&F2R1=1&F2R2=1&F3R1=1&F3R2=1&F4R1=1&F4R2=1&F5R1=1&F5R2=1&F6R1=1&F6R2=1&F7R1=1&F7R2=1&F8R1=1&F8R2=1&F9R1=1&F9R2=1&F10R1=1&F10R2=1&F10R3=1");
  it('adds up the score in 10 frames with a strike', function() {
    expect(calculateScore(createScoreCard(inputStrike))).toEqual(31)
  })

  let inputStrikeSpare = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=10&F1R2=0&F2R1=1&F2R2=1&F3R1=4&F3R2=6&F4R1=1&F4R2=1&F5R1=1&F5R2=1&F6R1=1&F6R2=1&F7R1=1&F7R2=1&F8R1=1&F8R2=1&F9R1=1&F9R2=1&F10R1=1&F10R2=1&F10R3=1");
  it('adds up the score in 10 frames with a strike and spare', function() {
    expect(calculateScore(createScoreCard(inputStrikeSpare))).toEqual(40)
  })

  let inputStrikeSpareLastFrame = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=10&F1R2=0&F2R1=1&F2R2=1&F3R1=4&F3R2=6&F4R1=1&F4R2=1&F5R1=1&F5R2=1&F6R1=1&F6R2=1&F7R1=1&F7R2=1&F8R1=1&F8R2=1&F9R1=1&F9R2=1&F10R1=10&F10R2=10&F10R3=10");
  it('adds up the score in 10 frames with a strike and spare plus last frame', function() {
    expect(calculateScore(createScoreCard(inputStrikeSpareLastFrame))).toEqual(67)
  })

  let inputStrikeSpareLastFrame2 = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=10&F1R2=0&F2R1=1&F2R2=1&F3R1=4&F3R2=6&F4R1=1&F4R2=1&F5R1=1&F5R2=1&F6R1=1&F6R2=1&F7R1=1&F7R2=1&F8R1=1&F8R2=1&F9R1=1&F9R2=1&F10R1=10&F10R2=10&F10R3=");
  it('adds up the score in 10 frames with a strike and spare 2 rolls in last frame', function() {
    expect(calculateScore(createScoreCard(inputStrikeSpareLastFrame2))).toEqual(57)
  })

  let inputStrikeFrame9 = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=10&F1R2=0&F2R1=1&F2R2=1&F3R1=4&F3R2=6&F4R1=1&F4R2=1&F5R1=1&F5R2=1&F6R1=1&F6R2=1&F7R1=1&F7R2=1&F8R1=1&F8R2=1&F9R1=10&F9R2=0&F10R1=10&F10R2=10&F10R3=10");
  it('adds up the score in 10 frames with a strike in frame 9', function() {
    expect(calculateScore(createScoreCard(inputStrikeFrame9))).toEqual(95)
  })

})
