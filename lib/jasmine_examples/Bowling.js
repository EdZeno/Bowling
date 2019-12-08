"use strict"

let createGame = function(input) {
  let game = []
  input.forEach(function(key,value) {
    game.push([value, key])
  })
  game[0][0] = 'F1R1'
  return game
}


module.exports = createGame;
