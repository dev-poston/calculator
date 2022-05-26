const handlePrecedence = require('./handlePrecedence.js').solve;

module.exports = {
  math: (string, callback) => {
    string = string.replace(/\s/g, ''); //SANITIZE STRING - REMOVE WHITESPACE
    handlePrecedence(string, (res) => { // PASS INTO SOLVE MODULE TO HANDLE PRECEDENCE
      callback(null, res); //SEND RESULT BACK TO SERVER
    });

    //ADD MORE ADV OPERATORS HERE...

  }
};