const findNums = require('./findNums.js').nums;
const checkError = require('./errorHandler.js').error;
const alertMsg = require('./alertMessages.js');
// const controlInput = require('./controlInput.js').check;

module.exports = {
  solve: (str, callback) => {
    let solution = alertMsg.cantCompute;
    let dissect = async (s) => {
      //=====BASES CASE FOR RECURSION - EQUATION SOLVED=====//
      if (Number(s)) { //IF NUMBER(S) EVALUATES TO TRUE, EQUATION HAS BEEN SOLVED - REMOVE FROM CALLSTACK
        solution = s;
        return;
      }

      //=============ERROR HANDLING===========//
      if (checkError(s)) {
        solution = checkError(s);
        return;
      }

      //=====PRIORITY - HANDLE PAREN AREA=====//
      let firstHalf;
      let secHalf;
      let openParenCount = 0;
      let closeParenCount = 0;

      for (let i = 0; i < s.length; i++) {
        if (s.includes('(')) { //FIND OPENING PAREN
          if (s[i] !== '(' && s[i] !== ')') {
            continue;
          }
          let openParen = s.indexOf('(');
          if (s[i] === '(') {
            openParenCount++;
          }
          if (s[i] === ')') {
            closeParenCount++
          }

          if (openParenCount === closeParenCount) {
            let parenSec = s.slice(openParen + 1, i); //STORE AREA INSIDE OF PARENS
            firstHalf = s.slice(0, openParen); //STORE FIRST HALF OF EQUATION UP TO OPEN PAREN
            secHalf = s.slice(i + 1); //STORE SECOND HALF OF EQUATION FROM CLOSING PAREN TO END
            dissect(parenSec); //SOLVE EQUATION INSIDE PARENS, STORE IN SOLUTION
            dissect(firstHalf + solution + secHalf); //CONCAT SOLVED PAREN AREA WITH FIRST AND SECOND HALF OF EQUATION
            break; //NO NEED TO CONTINUE SEARCHING
          }

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