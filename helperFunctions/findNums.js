module.exports = {
  nums: (op, string) => {
    console.log('OP', op)
    let firstNum = '';
    let secNum = '';
    let operator = string[op];
    for (let i = op + 1; i < string.length; i++) {
      if (string[i] !== '+' &&
          string[i] !== '/' &&
          string[i] !== '*' &&
          string[i] !== '(') {
            secNum += string[i];
          } else {
            break;
          }
    }
    for (let j = 0; j < op; j++) {
      if (string[j] !== '+' &&
      string[j] !== '/' &&
      string[j] !== '*' &&
      string[j] !== '(') {
        firstNum += string[j];
      } else {
        break;
      }
    }
    console.log('FIRSTNUM: ', firstNum);
    console.log('SECNUM: ', secNum);
  }
};