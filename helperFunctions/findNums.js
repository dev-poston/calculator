const quickMaths = require('./math.js').quickMaths;

module.exports = {
  nums: (op, string, callback) => {
    console.log('OP: ', string[op], 'OP INDEX: ', op, 'string: ', string);
    let firstNum = [];
    let secNum = '';
    let operator = string[op];
    for (var i = op + 1; i < string.length; i++) {
      if (secNum.length >= 1 && string[i] === '-') {
        break;
      }
      if (string[i] !== '+' &&
          string[i] !== '/' &&
          string[i] !== '*' &&
          string[i] !== '(') {
            secNum += string[i];
      } else {
        break;
      }
    }

    // if we hit a neg operator - and its followed by another operator - slice at neg operator
    // if we hit a neg operator and its follow by an int - slice at int
    // if we hit an int and the next item is an operator - slice at int
    // if we hit an int and the next is undefined - unshift
    for (var j = op - 1; j >= 0; j--) {
      if ((string[j] === '-' || !isNaN(string[j])) &&
         (string[j-1] === '+' || string[j-1] === '/' || string[j-1] === '*' || string[j-1] === '(')) {
            firstNum.unshift(string[j]);
            break;
      } else if (string[j] === '-' && !isNaN(string[j-1])) {
        j++;
        break;
      // } else if ((!isNaN(string[j]) || string[j] === '-') &&
      //           (string[j-1] === '+' || string[j-1] === '/' || string[j-1] === '*' || string[j-1] === '(')) {
      //              firstNum.unshift(string[j])
      //              break;
      } else if ((!isNaN(string[j]) || string[j] === '-') && string[j-1] === undefined) {
        firstNum.unshift(string[j]);
        break;
      }
      //  else if (string[j] === '-' && string[j-1] === undefined) {
      //   firstNum.unshift(string[j]);
      //   break;
      // }
      firstNum.unshift(string[j]);
    }

    let fHalf = string.slice(0, j);
    let secHalf = string.slice(i);
    console.log('FIRSTNUM: ', firstNum.join(''));
    console.log('OPERATOR: ', operator);
    console.log('SECNUM: ', secNum);
    console.log('fHALF: ', fHalf);
    console.log('secHALF: ', secHalf);
    quickMaths(firstNum.join(''), operator, secNum, (res) => {
      console.log('qMath RES: ', res.toString());
      callback(fHalf + res.toString() + secHalf);
    })
  }
};