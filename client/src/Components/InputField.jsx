import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.calculator(this.state.input)
  };

  render() {
    return (
      <div className='math-box'>
        <input
          className='text-field'
          placeholder='Enter Math Equation Here'
          onChange={this.handleChange}
        />
        <input
          className='submit'
          type='submit'
          value='Calculate'
          onClick={this.handleSubmit}
        />
      </div>
    );
  };
};

export default InputField;