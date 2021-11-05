import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import InputField from './Components/InputField.jsx';
import API from './API.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: 0,
      input: ''
    };
    this.setInput = this.setInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.calculator = this.calculator.bind(this);
  };

  setInput(e, equation) {
    e.preventDefault();
    console.log('SETINPUT: ', equation);
    this.setState({
      input: this.state.input + equation
    });
  };

  handleClear(e) {
    e.preventDefault();
    this.setState({
      input: '',
      solution: 0
    });
  }

  calculator(e, input) {
    e.preventDefault();
    API.post({input}, (data) => {
      if (typeof data === 'string') {
        alert(data);
      } else {
        this.setState({
          input: '',
          solution: data
        });
      }
    });
  };

  render() {
    return(
      <div>
        <InputField
          clear={this.handleClear}
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