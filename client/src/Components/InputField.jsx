import React from 'react';

const InputField = (props) => {
    return (
      <div className='math-box'>
        <input
          className='text-field'
          value={props.equation}
          placeholder={props.solution}
          onChange={(e) => props.setInput(e.target.value)}
        />
        <input
          className='submit'
          type='submit'
          value='Calculate'
          onClick={(e) => props.calculator(e, props.equation)}
        />
      </div>
    );


};

export default InputField;