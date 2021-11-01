const solve = require('./solve.js').solve;

module.exports = {
  math: (string, callback) => {
    string = string.replace(/\s/g, ''); //santize string

    // const calculate = (str) => {
    //   console.log('CAL NEW STR: ', str);
    //   //change for neg int solution
    //   if (!str.includes('(') &&
    //       !str.includes(')') &&
    //       !str.includes('/') &&
    //       !str.includes('*') &&
    //       !str.includes('+') &&
    //       !str.includes('-')) {
    //     callback(str);
    //     return;
    //   } else {
    //   }
      solve(string, (res) => {
        console.log('RES', res);
        callback(res);
        // calculate(res);
      });
    // }
    // calculate(string);
  }
};

// calculate = "1 + 2" gives 3
// calculate = "4*5/2" gives 10
// calculate = "-5+-8--11*2" gives 9
// calculate = "-.32 /.5" gives -0.64
// calculate = "(4-2)*3.5" gives 7
// calculate = "2+-+-4" gives Syntax Error (or similar)
// calculate = "19 + cinnamon" gives Invalid Input (or similar)