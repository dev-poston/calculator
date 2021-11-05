const {add, sub, mul, div} = require('sinful-math');

module.exports = {
  quickMaths: (a, op, b, callback) => {
    //PERFORM MATH OPERATION FOR [+, -, *, /]
    if (op === '+') {
      callback((Number.isInteger(a) && Number.isInteger(b)) ? (a + b) : (add(a, b)));
    }
    if (op === '-') {
      callback((Number.isInteger(a) && Number.isInteger(b)) ? (a - b) : (sub(a, b)));
    }
    if (op === '*') {
      callback((Number.isInteger(a) && Number.isInteger(b)) ? (a * b) : (mul(a, b)));
    }
    if (op === '/') {
      callback((Number.isInteger(a) && Number.isInteger(b)) ? (a / b) : (div(a, b)));
    }
  }
};