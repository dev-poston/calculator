import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import InputField from './Components/InputField.jsx';
import API from './API.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: '',
      input: ''
    };
    this.setInput = this.setInput.bind(this);
    this.calculator = this.calculator.bind(this);
  };

  setInput(equation) {
    console.log('SETINPUT: ', equation);
    this.setState({
      input: equation
    });
  };

  calculator(e, input) {
    e.preventDefault();
    API.post({input}, (data) => {
      console.log('CLIENT API RES: ', data);
      if (typeof data === 'string') {
        alert(data);
      } else {
        this.setState({
          input: '',
          solution: data
        }, () => console.log('STATE: ', this.state));
      }
    });
  };

  render() {
    return(
      <div>
        <h1 className='title'>Super Math Calculator 5000</h1>
        <InputField
          equation={this.state.input}
          setInput={this.setInput}
          calculator={this.calculator}
          solution={this.state.solution}
        />
      </div>
    );
  };
};

ReactDOM.render(<App/>, document.getElementById('app'));