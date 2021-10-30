module.exports = {
  quickMaths: (a, op, b, callback) => {
    //need to find neg int and num longer than 1 digit
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