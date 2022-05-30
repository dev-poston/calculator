const handlePrecedence = require('./handlePrecedence.js').solve;

module.exports = {
  math: (string, callback) => {
    handlePrecedence(string, (res) => { // PASS INTO SOLVE MODULE TO HANDLE PRECEDENCE
      callback(null, res); //SEND RESULT BACK TO SERVER
    });

    //ADD MORE ADV OPERATORS HERE...
  }
};