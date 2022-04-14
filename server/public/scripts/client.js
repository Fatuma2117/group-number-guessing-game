$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submitButton').on('click', acceptGuesses)
}

// grabs values of inputs on DOM
// and generates new object guesses
// runs "checkGuesses" against "guesses" (the new object)
function acceptGuesses() {
  // console.log('You clicked me on the submit button!');
  let guesses = {
    playerOne: $('#pOneInput').val(),
    playerTwo: $('#pTwoInput').val(),
    playerThree: $('#pThreeInput').val()
  }
  checkGuesses();
}

// Returns response form serverSideAccepter
function checkGuesses() {
  $.ajax({
    method: 'GET',
    url: '/winChecker'
  })
  .then(function(response){
   console.log(response);
  }) 
  }

