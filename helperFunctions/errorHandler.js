module.exports ={
  error: (input, callback) => {
    if (input.includes('/0') && !input.includes('/0.')) { //IF USER ATTEMPTS TO DIVIDE BY 0 - RETURN ERROR MESSAGE TO ALERT
      return 'Beep Boop - Sorry, I Cannot Divide by Zero.';
    }
    const regExp = /[a-zA-Z]/g;
    if (regExp.test(input) || input.includes('undefined')) { // IF USER INPUTS A LETTER - RETURN ERROR MESSAGE TO ALERT
      return 'Beep Boop - Sorry, I Cannot Compute That Expression.';
    }
  }
}