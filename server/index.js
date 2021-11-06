const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 1337;
const calculator = require('../helperFunctions/calculator.js').math;

app.use(express.static('client/dist'));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  calculator(req.body.input, (err, data) => { //SEND EQUATION TO CALCULATOR
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});