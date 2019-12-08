"use strict"

// let Bowling = function() {
//   return "hello"
// }


let createGame = function(input) {
  // var url_string = window.location.href
  // var url = new URL(url_string);
  // var c = url.searchParams.get("c");
  // console.log(c);

  // var c = new URLSearchParams(window.location.search).get("F1R2")
  //
  // var c = url.searchParams.get("F1R1")

  var game = []
  input.forEach(function(key,value) {
    game.push([value, key])
  })
  // game.push(url)

  // return game[0]['key']
  return game
}


module.exports = createGame;
