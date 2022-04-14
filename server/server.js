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




app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
