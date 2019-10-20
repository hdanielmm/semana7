const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
// const bodyParser = require("body-parser");
const port = 3001;

app.use(cookieSession({
  secret: 's3Cur3',
  name: 'sessionId',
  maxAge: 1 * 60 * 1000
}));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const generateNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
}

app.get('/', (req, res) => {
  req.session.number = generateNumber();
  res.sendFile(__dirname + '/public/app.html');
  console.log(req.session.number);
});

app.post("/guess", (req, res) => {

  const userNumber = parseInt(req.body.number);

  if (!req.session.number) {
    req.session.number = generateNumber();

    res.sendStatus(404);
  } else if (req.session.number === userNumber) {
    req.session.number = generateNumber();
    console.log(req.session.number);
    res.json({ won: true });
  } else { 
    res.json({ won: false });
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))