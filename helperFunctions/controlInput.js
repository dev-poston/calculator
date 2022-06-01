const alertMsg = require('./alertMessages.js');
//NOT IN USE//
module.exports = {
  check: (input, callback) => {
    input = input.replace(/\s/g, ''); //SANITIZE STRING - REMOVE WHITESPACE
    const invalid = /([+-]?([0-9]*[.])?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/g; //CHECK IF VALID MATHMATICAL EQUATION
    if (!invalid.test(input)) {
      console.log('FAILED IN CHECK!')
      callback(alertMsg.notMath);
    }
  }
};