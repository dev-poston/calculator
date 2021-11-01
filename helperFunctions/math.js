module.exports = {
  quickMaths: (a, op, b, callback) => {
    console.log('A: ', a, 'OP: ', op, 'B: ', b);
    if (op === '+') {
      callback(Number(a) + Number(b));
    }
    if (op === '-') {
      callback(Number(a) - Number(b));
    }
    if (op === '*') {
      callback(Number(a) * Number(b));
    }
    if (op === '/') {
      callback(Number(a) / Number(b));
    }
  }
};