const alertMsg = require('./alertMessages.js');

module.exports ={
  error: (input, callback) => {
    if(input === '0' || !input.length) { //IF INPUT IS EMPTY OR IF EQUATION = 0 - RETURN STRING TO ALERT
      return '0';
    }
    if (input.includes('/0') && !input.includes('/0.')) { //IF USER ATTEMPTS TO DIVIDE BY 0 - RETURN ERROR MESSAGE TO ALERT
      return alertMsg.cantDivideZero;
    }
    const regExp = /[a-zA-Z]/g;
    if (regExp.test(input) || input.includes('undefined')) { // IF USER INPUTS A LETTER - RETURN ERROR MESSAGE TO ALERT
      return alertMsg.cantCompute;
    }
  }
}