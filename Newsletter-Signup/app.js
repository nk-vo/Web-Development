const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')
const dotenv = require('dotenv').config({path: __dirname + '/.env'})

const app = express()
const port = 3000

const API_KEY = process.evn.API_TOKEN
const GROUP_ID = process.env.GROUP_ID

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post('/', function (req, res) {
  const lastName = req.body.lName
  const email = req.body.email
  const firstName = req.body.fName
  const data = {
    members: [
      {
      email_address: email,
      status: "subscribed",
      merge_field: {
        FNAME: firstName,
        LNAME: lastName
      }
    }
    ]
  }
  const jsonData = JSON.stringify(data)
  const url = `https://us12.api.mailchimp.com/3.0/lists/${API_KEY}`

  const options = {
    method: "POST",
    auth: `nick1:${GROUP_ID}`
  }
  const request = https.request(url, options, function(response){

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }
    response.on("data", function(data){
      console.log(JSON.parse(data))
    })
  })

  request.write(jsonData)
  request.end()
})

app.post('/failure', function (req, res) {
  res.redirect('/')
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))