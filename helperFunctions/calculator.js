const solve = require('./solve.js').solve;

module.exports = {
  math: (string, callback) => {

    //SANITIZE STRING - REMOVE WHITESPACE
    string = string.replace(/\s/g, '');
    solve(string, (res) => {
      callback(null, res);
    });

    //ADD MORE ADV OPERATORS HERE...

  }
};