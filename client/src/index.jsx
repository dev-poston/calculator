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
  //=====HANDLE CALCULATOR BUTTON PRESS=====//
  handleButtons(e, equation) {
    e.preventDefault();
    this.setState({
      input: this.state.input + equation
    });
  };

  //=====HANDLE TEXT FIELD INPUT=====//
  handleTextField(equation) {
    this.setState({
      input: equation
    });
  };

  //=====HANDLE CLEAR BUTTON - CLEARS INPUT & RESULT=====//
  handleClear(e) {
    e.preventDefault();
    this.setState({ //IMPORTANT - CLEAR INPUT SO PLACEHOLDER WITH RESULT CAN BE VISIBLE
      input: '',
      solution: 0
    });
  };

  //=====HANDLE THE SUBMISSION OF AN EQUATION=====//
  calculator(e, input) {
    e.preventDefault();
    API.post({input: input}, (err, data) => {
      if (err) { //API CALL ERROR - SERVER IS NOT RESPONDING!
        alert('Beep Boop - Sorry, I encountered an error. Please Try Again Later.');
      } else { //ALERTS FOR ERROR HANDLING
        if (typeof data === 'string') {
          alert(data);
        } else { //SET STATE WITH RESULT OF CALCULATOR TO DISPLAY, RESET INPUT
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