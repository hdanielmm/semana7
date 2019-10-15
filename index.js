const express = require('express')
const app = express()
const cookieSession = require("cookie-session")
const port = 3000

app.use(express.urlencoded()); 

app.use(cookieSession({
  secret: "frase_secreta",
  name: "sessionId",
  maxAge: 1 * 60 * 1000,
}))

app.get('/', (req, res, next) => {  
  if(!req.session.number) {
    req.session.number = Math.floor(Math.random() * 10 + 1)
    // res.status(404)
  }
  res.sendFile(__dirname + "/view.html")
})

app.post("/", (req, res) => {
  const userNumber = req.body.userNum
  req.session.expires = Date.now()
  console.log("expires", req.session.expires)
  console.log("req.session", req.session.number)
  if(userNumber == req.session.number) {
    req.session.number = Math.floor(Math.random() * 10 + 1)
    res.json({won: true})
  } else {
    res.status(404).sendFile(__dirname + "/view.html")
  }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))