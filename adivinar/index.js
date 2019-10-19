

















/**************************************
const express = require("express")
const cookieSession = require('cookie-session')
const app = express()


app.use(express.json())

app.use(cookieSession({
  secret: "Es un secreto",
  // Cookie Options
  maxAge: 60 * 1000 // 1 min
}))


app.get("/", (req, res) => {
  req.session.number = Math.floor((Math.random() * 10) + 1)
  res.sendFile(__dirname + "/views/index.html")
  console.log(req.session.number);
})

app.get("/js/app.js", (req, res) => {
  res.sendFile(__dirname + "/views/js/app.js")
})

app.get("/number", (req, res) => {
  res.send(`<h1>${req.session.number}</h1>`)
})

app.post("/number", (req, res) => {
  if (req.session.number == null) {
    req.session.number = Math.floor((Math.random() * 10) + 1)
    console.log(req.session.number);
    res.sendStatus(404)
  } else {
    let win = req.body.number == req.session.number
    if (win) {
      req.session.number = Math.floor((Math.random() * 10) + 1)
      console.log(req.session.number);
    }
    res.json({ win })
  }
})

//Client side

$(".guess").on("click", () => {
  let guess = $("input").val()
  $("input").val("")
  $.ajax({
    method: "POST",
    url: "/number",
    data: JSON.stringify({ number: guess }),
    contentType: "application/json"
  }).done(data => {
    if (data.win) {
      alert("Ganaste")
    } else {
      alert("Siguelo intentando amigo")
    }
  }).fail(() => {
    alert("Se acabo el tiempo")
  })
})


app.listen(3000, () => console.log("Listening on port 3000")
) 


 */