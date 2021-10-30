import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import InputField from './Components/InputField.jsx';
import helper from '../../helperFunctions/calculate.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: ''
    };
    this.calculator = this.calculator.bind(this);
  };

  calculator(input) {
    helper.math(input, (data) => {
      console.log('data: ', data);
    });
  };

  render() {
    return(
      <div>
        <h1 className='title'>Super Math Calculator 5000</h1>
        <InputField calculator={this.calculator}/>
      </div>
    );
  };
};

ReactDOM.render(<App/>, document.getElementById('app'));