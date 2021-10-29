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
    this.calculate = this.calculate.bind(this);
  };

  calculate(input) {
    helper.math(input, (data) => {
      console.log('data: ', data);
    });
  };

  render() {
    return(
      <div>
        <h1 className='title'>Super Math Calculator 5000</h1>
        <InputField calculate={this.calculate}/>
      </div>
    );
  };
};

ReactDOM.render(<App/>, document.getElementById('app'));