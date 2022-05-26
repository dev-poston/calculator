const quickMaths = require('./math.js').quickMaths;

module.exports = {
  nums: (op, string, callback) => {

    let firstNum = [];
    let secNum = '';
    let operator = string[op];
    const operators = ['*', '/', '+'];

    // console.log('FINDNUMS: ', string)
    //======FIND NUMBER RIGHT OF OPERATOR=====//
    for (var i = op + 1; i < string.length; i++) {
      if (secNum.length >= 1 && string[i] === '-') { //IF WE ENCOUNTER [-], STOP
        break;
      }
      if (!operators.includes(string[i])) { //IF CURRENT ITEM IS NOT [*, '/', +], ADD TO SECOND NUMBER
        secNum += string[i];
      } else {
        break;
      }
    }

    //=====FIND NUMBER LEFT OF OPERATOR======
    for (var j = op - 1; j >= 0; j--) { // REVERSE LOOP FROM POSITION OF OPERATOR
      if ((string[j] === '-' || !isNaN(string[j])) && // CURRENT ITEM IS [-] OR NOT AN INTEGER
        (operators.includes(string[j-1]) || string[j-1] === undefined)) { // AND NEXT ITEM IS [*, '/', +] OR UNDEFINED
        firstNum.unshift(string[j]); // ADD TO FIRST NUMBER, STOP
        break;
      } else if (string[j] === '-' && !isNaN(string[j-1])) { // IF CURRENT ITEM IS [-] AND THE FOLLOWING IS NOT AN INTEGER, STOP
        j++; // IMPORTANT
        break;
      }
      firstNum.unshift(string[j]); // ELSE ADD ITEM TO FIRST NUMBER
    }
    if (firstNum[0] === '.') { // HANDLING IMPROPERLY FORMATTED FLOAT INT
      j++
    };

    //======STORE LEFT & RIGHT OF THE AO=====//
    let fHalf = string.slice(0, j); // EVERYTHING LEFT OF THE FIRST NUMBER
    let secHalf = string.slice(i); // EVERYTHING RIGHT OF THE SECOND NUMBER
    console.log('FH', fHalf)
    console.log('fNum', firstNum)
    console.log('SH', secHalf)
    console.log('sNum', secNum)

    //=====EVALUATE THE AO - CONCAT WITH THE LEFT & RIGHT OF AO=====
    quickMaths(firstNum.join(''), operator, secNum, (res) => { // PERFORM MATH OF THE FIRST/SECOND NUMBER & OPERATOR
      console.log('SOLVED: ', res)
      callback(fHalf + res.toString() + secHalf); // CONCAT RESULT WITH EVERYTHING LEFT OF FIRST NUMBER & EVERYTHING RIGHT OF SECOND NUMBER
    });
  }
};