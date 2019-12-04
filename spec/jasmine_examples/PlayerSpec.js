describe("Bowling", function() {
  var Bowling = require('../../lib/jasmine_examples/Player');
  // var Song = require('../../lib/jasmine_examples/Song');
  // var player;
  // var song;

  // beforeEach(function() {
  //   player = new Player();
  //   song = new Song();
  // });
  it("should say hello", function() {
    // var bowling = new Bowling();
    expect(Bowling()).toEqual("hello");
  });
});
