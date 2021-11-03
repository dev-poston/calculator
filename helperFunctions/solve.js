const findNums = require('./findNums.js').nums;

module.exports = {
  solve: (str, callback) => {
    let solution;
    let dissect = (s) => {
      //=============ERROR HANDLING===========
      if (s.includes('/0') && !s.includes('/0.')) {
        alert('Beep Boop - Sorry, I Cannot Divide by Zero.')
        return;
      }
      const regExp = /[a-zA-Z]/g;
      if (regExp.test(s)) {
        console.log('CHARACTER ERROR: ', s);
        alert('Beep Boop - Sorry, I Cannot Compute That Expression.')
        return;
      }

      //=====BASES CASE - EQUATION SOLVED=====
      if (Number(s)) {
        console.log('SOLVED: ', s);
        solution = s;
        return;
      }

      let firstHalf;
      let secHalf;

      for (let i = 0; i < s.length; i++) {
        //=====PRIORITY - HANDLE PARENS=====
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
          dissect(parenSec);
          dissect(firstHalf + solution + secHalf);
          break;

          //======HANDLE DIVISION AND MULTIPLICATION======
        } else if (s.includes('/') || s.includes('*')) {
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

          //======HANDLE ADDITION AND SUBTRACTION=====
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
    callback(solution);
  }
};