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
    this.handleButtons = this.handleButtons.bind(this);
    this.handleTextField = this.handleTextField.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.calculator = this.calculator.bind(this);
  };

  handleButtons(e, equation) {
    e.preventDefault();
    this.setState({
      input: this.state.input + equation
    });
  };

  handleTextField(equation) {
    this.setState({
      input: equation
    });
  };

  handleClear(e) {
    e.preventDefault();
    this.setState({
      input: '',
      solution: 0
    });
  };

  calculator(e, input) {
    e.preventDefault();
    API.post({input}, (err, data) => {
      if (err) {
        alert('Beep Boop - Sorry, I encountered as error. Please Try Again Later.');
      } else {
        if (typeof data === 'string') {
          alert(data);
        } else {
          this.setState({
            input: '',
            solution: data
          });
        }
      }
    });
  };

  render() {
    return(
      <div>
        <InputField
          handleButtons={this.handleButtons}
          handleTextField={this.handleTextField}
          clear={this.handleClear}
          calculator={this.calculator}
          equation={this.state.input}
          solution={this.state.solution}
        />
      </div>
    );
  };
};

ReactDOM.render(<App/>, document.getElementById('app'));