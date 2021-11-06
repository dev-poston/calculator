module.exports = {
  check: (input, callback) => {
    const invalid = /([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/g;
    if (!invalid.test(input)) {
      console.log('INVALID INPUT');
      return;
    }
    callback(input);
  }
};