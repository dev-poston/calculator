const findNums = require('./findNums.js').nums;

module.exports = {
  solve: (str, callback) => {
    console.log('SOLVE:', str);

    let dissect = (s) => {
      if (s.includes('/0') && !s.includes('/0.')) {
        alert('Beep Boop - Sorry, I Cannot Divide by Zero.')
        return;
      }
      let regExp = /[a-zA-Z]/g;
      if (regExp.test(s)) {
        alert('Beep Boop - Sorry, I Cannot Compute That Expression.')
        return;
      }

      if (Number(s)) {
        console.log('SOLVED!!!');
        callback(s);
        return;
      }

      let firstHalf;
      let secHalf;

      for (let i = 0; i < s.length; i++) {
        // store indexOf first paren instead of using indexof 3x
        if (s.includes('(')) {
          console.log('PAREN: ', s);
          let openParen = s.indexOf('(');
          firstHalf = s.slice(0, openParen);
          for (var j = s.length - 1; j >= 0; j--) {
            if (s[j] === ')') {
              secHalf = s.slice(j + 1);
              break;
            }
          }
          let parenSec = s.slice(openParen + 1, j);
            console.log('FIRSTparenHALF: ', firstHalf);
            console.log('parenSEC: ', parenSec);
            console.log('SECparenHALF: ', secHalf);
          let solveParens = dissect(parenSec);
          // callback(firstHalf + solveParens + secHalf);
          // break;
        } else if (s.includes('/') || s.includes('*')) {
          //do div by zero check
          console.log('D or M', s);
          let divideOrMultiply;
          if (s.includes('/')) {
            divideOrMultiply = s.indexOf('/');
          } else {
            divideOrMultiply = s.indexOf('*');
          }
          findNums(divideOrMultiply, s, (res) => {
            dissect(res);
          });
          break;
        } else if (s[i - 1] && (s[i] === '-' || s[i] === '+')) {
          console.log('S or A:', s);
          findNums(i, s, (res) => {
            dissect(res);
          });
          break;
        }
      };
    };
    dissect(str);
  }
};