$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submitButton').on('click', acceptGuesses)
}
function acceptGuesses() {
  // console.log('You clicked me on the submit button!');
  let guesses = {
    playerOne: $('#pOneInput').val(),
    playerTwo: $('#pTwoInput').val(),
    playerThree: $('#pThreeInput').val()
  }
  checkGuesses(guesses);
}

function checkGuesses() {
$.ajax({
  method: 'GET',
  url: '/randomNumber'
})
.then(function(response){
 console.log(response);
})
 
}

