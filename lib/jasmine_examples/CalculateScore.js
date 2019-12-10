"use strict";

let calculateScore = function(input) {
  // let totalScore = input[0][0] + input[0][1]

  let scoreByFrames = input.map(element => element.reduce((a, b) => a + b, 0))
  let totalScore = scoreByFrames.reduce((a, b) => a + b, 0)

  // console.log(totalScore)
  return totalScore
}


module.exports = calculateScore;
