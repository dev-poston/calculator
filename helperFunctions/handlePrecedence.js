const findNums = require('./findNums.js').nums;
const checkError = require('./errorHandler.js').error;
//*NOTE - FUTURE CHANGES: MODULARIZE PARENS, DIVIDE/MULTIPLY & SUBTRACT/ADD

module.exports = {
  solve: (str, callback) => {
    let solution;
    let dissect = (s) => {
      //=============ERROR HANDLING===========//
      if (checkError(s)) {
        solution = checkError(s);
        return;
      }

      //=====BASES CASE FOR RECURSION - EQUATION SOLVED=====//
      if (Number(s)) { //IF NUMBER(S) EVALUATES TO TRUE, WE KNOW EQUATION HAS BEEN SOLVED - REMOVE FROM CALLSTACK
        solution = s;
        return;
      }

      //=====PRIORITY - HANDLE PAREN AREA=====//
      let firstHalf;
      let secHalf;

      for (let i = 0; i < s.length; i++) {
        if (s.includes('(')) { //FIND OPENING PAREN

          let openParen = s.indexOf('(');
          firstHalf = s.slice(0, openParen); //STORE FIRST HALF OF EQUATION UP TO OPEN PAREN

          for (var j = s.length - 1; j >= 0; j--) {
            if (s[j] === ')') { //FIND CLOSING PAREN
              secHalf = s.slice(j + 1); //STORE SECOND HALF OF EQUATION FROM CLOSING PAREN TO END
              break;
            }
          }

          let parenSec = s.slice(openParen + 1, j); //STORE AREA INSIDE OF PARENS
          dissect(parenSec); //SOLVE EQUATION INSIDE PARENS
          dissect(firstHalf + solution + secHalf); //CONCAT SOLVED PAREN AREA WITH FIRST AND SECOND HALF OF EQUATION
          break; //NO NEED TO CONTINUE SEARCHING

          //======HANDLE DIVISION AND MULTIPLICATION======//
        } else if (s.includes('/') || s.includes('*')) {
          let divideOrMultiply;
          if (s.includes('/')) { //FIND & STORE POSITION OF DIVIDE OR MULTIPLY OPERATOR
            divideOrMultiply = s.indexOf('/');
          } else {
            divideOrMultiply = s.indexOf('*');
          }
          findNums(divideOrMultiply, s, (res) => { //SEND EQUATION TO FIND POSSIBLE INTERGERS LEFT & RIGHT OF OPERATOR, ALONG WITH POSITION OF * OR / OPERATOR
            dissect(res); //CALL RECURSIVELY UNTIL EQUATION IS SOLVED
          });
          break; //NO NEED TO CONTINUE SEARCHING

          //======HANDLE ADDITION AND SUBTRACTION=====//
        } else if (s[i - 1] && (s[i] === '-' || s[i] === '+')) {
          findNums(i, s, (res) => { //SEND EQUATION TO FIND POSSIBLE INTERGERS LEFT & RIGHT OF OPERATOR, ALONG WITH POSITION OF - OR + OPERATOR
            dissect(res); //CALL RECURSIVELY UNTIL EQUATION IS SOLVED
          });
          break; //NO NEED TO CONTINUE SEARCHING
        }
      };
    };
    dissect(str);
    callback(solution); //RETURN SOLUTION
  }
};