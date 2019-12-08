describe("createGame", function() {
  var createGame = require('../../lib/jasmine_examples/Bowling');
  // const URLSearchParams = require('url-search-params-polyfill');
  require('url-search-params-polyfill');

  it('should return an object', function() {
  // URLSearchParams(window.location.search);
  var params = new URLSearchParams("file:///Users/eduardkulcsickij-gut/MAKERS/Bowling-challenge/Bowling/ui.html?F1R1=3&F1R2=8");
  console.log(createGame(params))
  expect(createGame(params)).toEqual([['F1R1', '3'], ['F1R2', '8']])
  })

});
