const solve = require('./solve.js').solve;

module.exports = {
  math: (string, callback) => {
    console.log('MATH: ', string);
    string = string.replace(/\s/g, ''); //SANITIZE STRING - REMOVE WHITESPACE
    solve(string, (res) => { // PASS INTO SOLVE MODULE TO HANDLE PRECEDENCE
      callback(null, res); //SEND RESULT BACK TO SERVER
    });

    //ADD MORE ADV OPERATORS HERE...

  }
};