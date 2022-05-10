const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', function (req, res) {
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var result = num1 + num2;
  res.send("The result is " + result)
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator', function (req, res) {
  var weight = Number(req.body.weight)
  var height = Number(req.body.height)
  var result = Math.floor(weight/(height*height))

  res.send("Your BMI is " + result)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
