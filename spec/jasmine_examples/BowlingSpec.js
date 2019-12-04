describe("Bowling", function() {
  var Bowling = require('../../lib/jasmine_examples/Bowling');
  
  it("should say hello", function() {
    expect(Bowling()).toEqual("hello");
  });
});
