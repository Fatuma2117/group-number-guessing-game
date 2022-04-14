const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


// GET & POST Routes go here

let tacocat = randomNumber(1, 25);



app.get('/randomNumber',(req,res)=>{
console.log('GET/randomNumber');
res.send(tacocat.toString());
})

// loop thru guesses, check them against tacocat and 
// return object(??) with 3 values indicating tacocat minus input value
function serverSideChecker(guesses) {
  $.ajax({
    method: 'POST',
    url: '/winChecker'    
  })
  .then(function(response){
  //  console.log(response);
  })  
  }

  // receives guesses from client side and feeds them into serverSideChecker
function serverSideReceiver(guesses)
$.ajax({
  method: 'GET',
  url: '/winChecker',
  data: guesses
})
.then(function(response){
//  console.log(response);
})


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
