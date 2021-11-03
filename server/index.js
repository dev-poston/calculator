const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 1337;
const helper = require('../helperFunctions/calculate.js');

app.use(express.static('client/dist'));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  helper.math(req.body.input, (data) => {
    res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});