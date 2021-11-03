import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import InputField from './Components/InputField.jsx';
import API from './API.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: 0
    };
    this.calculator = this.calculator.bind(this);
  };

  calculator(input) {
    API.post({input}, (data) => {
      console.log('CLIENT API RES: ', data);
      this.setState({
        solution: data
      });
    });
  };

  render() {
    return(
      <div>
        <h1 className='title'>Super Math Calculator 5000</h1>
        <InputField
          calculator={this.calculator}
          solution={this.state.solution}
        />
      </div>
    );
  };
};

ReactDOM.render(<App/>, document.getElementById('app'));