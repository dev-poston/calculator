const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 1337;
const helper = require('../helperFunctions/calculator.js');

app.use(express.static('client/dist'));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  helper.math(req.body.input, (err, data) => {
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