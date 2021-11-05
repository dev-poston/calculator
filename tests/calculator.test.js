const API = require('../client/src/API.js');
const calculator = require('../helperFunctions/calculator.js').math;


describe ('example equations', () => {
  it ('should solve basic addition with withspace', () => {
    calculator('1 + 2', (err, data) => {
      expect(data).toBe('3');
    });
  });

  it ('should solve basic multiplication and division', () => {
    calculator('4*5/2', (err, data) => {
      expect(data).toBe('10');
    });
  });

  it ('should solve negative integers, addition, subtraction and multiplication', () => {
    calculator('-5+-8--11*2', (err, data) => {
      expect(data).toBe('9');
    });
  });

  it ('should solve floats, negative floats, and division with whitespace', () => {
    calculator('-.32       /.5', (err, data) => {
      expect(data).toBe('-0.64');
    });
  });

  it ('should solve parens', () => {
    calculator('(4-2)*3.5', (err, data) => {
      expect(data).toBe('7');
    });
  });

  it ('should solve nested parens', () => {
    calculator('(1+(1+2)+3)+1', (err, data) => {
      expect(data).toBe('8');
    });
  });

  it ('should alert user when attempting to divide by zero', () => {
    calculator('1-2*(-4/0)', (err, data) => {
      expect(data).toBe('Beep Boop - Sorry, I Cannot Divide by Zero.');
    });
  });

  it ('should alert users when given an improperly formatted equation', () => {
    calculator('2+-+-4', (err, data) => {
      expect(data).toBe('Beep Boop - Sorry, I Cannot Compute That Expression.');
    });
  });

  it ('should alert users when given an improperly formatted equation', () => {
    calculator('19 + cinnamon', (err, data) => {
      expect(data).toBe('Beep Boop - Sorry, I Cannot Compute That Expression.');
    });
  });


  describe('API routes', () => {
    it ('should solve equation via API POST route', () => {
      API.post({input: '4*5/2'}, (err, data) => {
        if (err) {
          console.log('TEST ERROR: ', err);
        } else {
          expect(data.status).toBe(200);
          expect(data.data).toBe(10);
        }
      });
    });
  });

});