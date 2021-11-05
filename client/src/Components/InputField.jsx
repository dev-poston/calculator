import React from 'react';

const InputField = (props) => (
  <div className='calc'>
    <div className='display'>
    <input
      className='display'
      value={props.equation}
      placeholder={props.solution}
      onChange={(e) => props.handleTextField(e.target.value)}
    />
    </div>
    <div className='nums'>
      <div className='ac' onClick={(e) => props.clear(e)}> AC </div>
      <div id='parens' onClick={(e) => props.handleButtons(e, '(')}> ( </div>
      <div id='parens' onClick={(e) => props.handleButtons(e, ')')}> ) </div>
      <div onClick={(e) => props.handleButtons(e, '7')}> 7 </div>
      <div onClick={(e) => props.handleButtons(e, '8')}> 8 </div>
      <div onClick={(e) => props.handleButtons(e, '9')}> 9 </div>
      <div onClick={(e) => props.handleButtons(e, '4')}> 4 </div>
      <div onClick={(e) => props.handleButtons(e, '6')}> 6 </div>
      <div onClick={(e) => props.handleButtons(e, '5')}> 5 </div>
      <div onClick={(e) => props.handleButtons(e, '1')}> 1 </div>
      <div onClick={(e) => props.handleButtons(e, '2')}> 2 </div>
      <div onClick={(e) => props.handleButtons(e, '3')}> 3 </div>
      <div className='num-0' onClick={(e) => props.handleButtons(e, '0')}> 0 </div>
      <div onClick={(e) => props.handleButtons(e, '.')}> . </div>
    </div>
    <div className='opsbox'>
      <div className='ops' onClick={(e) => props.handleButtons(e, '/')}> &#247; </div>
      <div className='ops' onClick={(e) => props.handleButtons(e, '*')}> &#215; </div>
      <div className='ops' onClick={(e) => props.handleButtons(e, '-')}> – </div>
      <div className='ops' onClick={(e) => props.handleButtons(e, '+')}> + </div>
      <div className='ops' onClick={(e) => props.calculator(e, props.equation)}> = </div>
    </div>
  </div>
);

export default InputField;