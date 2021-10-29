const express = require('express');
const app = express();
const port = 1337;

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});