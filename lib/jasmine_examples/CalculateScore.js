"use strict";

let calculateScore = function(input) {
  let scoreByFrames = [];
  // let totalScore = input[0][0] + input[0][1]

  // let scoreByFrames = input.map(element => element.reduce((a, b) => a + b, 0))
  // let totalScore = scoreByFrames.reduce((a, b) => a + b, 0)

  for (let i = 0; i < 10; i++) {
    if (input[i][0] === 10) {
      scoreByFrames.push(10 + input[i+1].reduce((a, b) => a + b, 0))
    }
    else {
      scoreByFrames.push(input[i].reduce((a, b) => a + b, 0))
    }
  }

  let totalScore = scoreByFrames.reduce((a, b) => a + b, 0)

  console.log(scoreByFrames)
  console.log(totalScore)
  return totalScore
}


module.exports = calculateScore;
