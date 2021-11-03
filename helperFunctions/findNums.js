const quickMaths = require('./math.js').quickMaths;

module.exports = {
  nums: (op, string, callback) => {

    let firstNum = [];
    let secNum = '';
    let operator = string[op];
    const operators = ['*', '/', '+'];

    //======FIND NUMBER RIGHT OF OPERATOR=====
    for (var i = op + 1; i < string.length; i++) {
      if (secNum.length >= 1 && string[i] === '-') {
        break;
      }
      if (!operators.includes(string[i])) {
            secNum += string[i];
      } else {
        break;
      }
    }

    // if we hit a neg operator - and next item is an operator - slice at neg operator
    // if we hit a neg operator - and next item an int - slice at int
    // if we hit an int - and next item is an operator - slice at int
    // if we hit an int - and next item is undefined - slice at int

    //=====FIND NUMBER LEFT OF OPERATOR======
    for (var j = op - 1; j >= 0; j--) {
      if ((string[j] === '-' || !isNaN(string[j])) && (operators.includes(string[j-1]) || string[j-1] === undefined)) {
        firstNum.unshift(string[j]);
        break;
      } else if (string[j] === '-' && !isNaN(string[j-1])) {
        j++;
        break;
      }
      firstNum.unshift(string[j]);
    }

    //======STORE LEFT & RIGHT OF THE AO=====
    let fHalf = string.slice(0, j);
    let secHalf = string.slice(i);

    console.log('FIRSTNUM: ', firstNum.join(''));
    console.log('OPERATOR: ', operator);
    console.log('SECNUM: ', secNum);
    console.log('fHALF: ', fHalf);
    console.log('secHALF: ', secHalf);

    //=====EVALUATE THE AO - CONCAT WITH THE LEFT & RIGHT OF AO=====
    quickMaths(firstNum.join(''), operator, secNum, (res) => {
      callback(fHalf + res.toString() + secHalf);
    })
  }
};