describe("createGame", function() {
  var createGame = require('../../lib/jasmine_examples/Bowling');

  it('should return an object', function() {
  var params = new URLSearchParams("key1=value1&key2=value2");
  console.log(createGame(params))
  expect(createGame(params)).toEqual([['key1', 'value1'], ['key2', 'value2']])
  })

});
