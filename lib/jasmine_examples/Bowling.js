"use strict";

let createGame = function(input) {
  let game = []
  input.forEach(function(key, value) {
    game.push([Number(key)])
  })

  let gameScore = []
  for (let i = 0; i < 10; i++) {
    gameScore.push(game[i].concat(game[i+1]))
    game.shift()
  }
  gameScore[9] = gameScore[9].concat(game.pop())

  console.log(gameScore)
  return gameScore
}

module.exports = createGame;
