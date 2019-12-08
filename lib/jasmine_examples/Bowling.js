"use strict"

let createGame = function(input) {
  let game = []
  input.forEach(function(key,value) {
    game.push([value, key])
  })

  return game
}


module.exports = createGame;
