const quickMaths = require('./math.js').quickMaths;

module.exports = {
  nums: (op, string, callback) => {
    console.log('OP: ', op, 'string: ', string);
    let firstNum = [];
    let secNum = '';
    let operator = string[op];
    for (let i = op + 1; i < string.length; i++) {
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
    for (let j = op - 1; j >= 0; j--) {
      // console.log('!!!', string[j])
      if (string[j] === '-' &&
         (string[j-1] === '+' ||
          string[j-1] === '/' ||
          string[j-1] === '*' ||
          string[j-1] === '(')) {
        firstNum.unshift(string[j]);
        break;
      } else if (string[j] === '-' && !isNaN(string[j-1])) {
        break;
      }
      firstNum.unshift(string[j])
    }
    let fHalf = string.slice(0, string.indexOf(firstNum.join('')));
    let secHalf = string.slice(string.indexOf(secNum) + secNum.length);
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