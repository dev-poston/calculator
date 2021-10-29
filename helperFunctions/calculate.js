module.exports = {
  math: (string, callback) => {
    string = string.replace(/\s/g, ''); //santize string
    console.log('string: ', string);
    let vals = [];
    let ops = [];

    const comp = (op, a, b) => {
      if (op === '+') {
        return Number(a) + Number(b);
      }
      if (op === '-') {
        return Number(a) - Number(b);
      }
      if (op === '*') {
        return Number(a) * Number(b);
      }
      if (op === '/') {
        return Number(a) / Number(b);
      }
    };

    for (let i = 0; i < string.length; i++) {
      if (string[i] === '(') {
        let paren = string.slice(i + 1, string.indexOf(')'));
        console.log(comp(paren[1], paren[0], paren[2]));
      }
    };

    callback(vals);
  }
};