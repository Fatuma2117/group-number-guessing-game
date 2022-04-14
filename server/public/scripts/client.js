$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submitButton').on('click', acceptGuesses)
}
function acceptGuesses() {
  let guesses = {
    playerOne: $('#pOneInput').val(),
    playerTwo: $('#pTwoInput').val(),
    playerThree: $('#pThreeInput').val()
  }
  checkGuesses(guesses);
}

function checkGuesses() {
$.aja

}
