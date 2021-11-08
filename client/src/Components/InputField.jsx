import React from 'react';

const InputField = (props) => {
  const buttons = ['(', ')', '7', '8', '9', '4', '5', '6', '1', '2', '3'];
  return (<div className='calc'>
    {/* DISPLAY AND INPUT */}
    <div className='display'>
    <input
      className='display'
      value={props.equation}
      placeholder={props.solution} //IMPORTANT - DISPLAYS RESULT
      onChange={(e) => props.handleTextField(e.target.value)}
    />
    </div>
    {/* BUTTONS & OPERATORS */}
    <div className='nums'>
      <div className='ac' onClick={(e) => props.clear(e)}> AC </div>
      {buttons.map((button, index) =>
        <div key={index} onClick={(e) => props.handleButtons(e, button)}>{button}</div>
      )}
      <div className='num-0' onClick={(e) => props.handleButtons(e, '0')}> 0 </div>
      <div onClick={(e) => props.handleButtons(e, '.')}> . </div>
    </div>
    {/* MORE OPERATORS */}
    <div className='opsbox'>
      <div className='ops' onClick={(e) => props.handleButtons(e, '/')}> &#247; </div>
      <div className='ops' onClick={(e) => props.handleButtons(e, '*')}> &#215; </div>
      <div className='ops' onClick={(e) => props.handleButtons(e, '-')}> – </div>
      <div className='ops' onClick={(e) => props.handleButtons(e, '+')}> + </div>
      <div className='ops' onClick={(e) => props.calculator(e, props.equation)}> = </div>
    </div>
  </div>)
};

export default InputField;