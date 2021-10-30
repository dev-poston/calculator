const quickMaths = require('./math.js').quickMaths;
const findNums = require('./findNums.js').nums;

module.exports = {
  solve: (str, callback) => {
    console.log('SOLVE:', str);

    let dissect = (s) => {
      for (let i = 0; i < s.length; i++) {
        // SOLVE PARENS FIRST
        if (s.includes('(')) {
          console.log('PAREN: ', s);
          //EXTRACT THE CONTENTS OF PARENS
          let firstHalf = s.slice(0, s.indexOf('('));
          for (var j = s.length - 1; j >= 0; j--) {
            if (s[j] === ')') {
              var secHalf = s.slice(s[j]);
              break;
            }
          }
          let parenSec = s.slice(s.indexOf('(') + 1, j);
          console.log('SEC: ', parenSec);
          let solveParens = dissect(parenSec);
          //callback(firstHalf + dissect(parenSec) + secHalf);
          break;
        } else if (s[i] === '/' || s[i] === '*') {
          console.log('D or M', s);
          break;
        } else if (s[i - 1] && (s[i] === '-' || s[i] === '+')) {
          console.log('S or A:', s);
          findNums(i, s, (res) => {

          })
          break;
        }
      };
    };
    dissect(str);
    // callback(str);
  }
};