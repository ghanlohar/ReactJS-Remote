import React, { Component } from 'react';

import Incrementer from './components/Incrementer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import StarsMatch from './star-match/StarsMatch';
import TestES6 from './TestES6';
import LiftStates from './LiftStates';
import ThemeContext from './ThemeContext';
import StyledComponent from './StyledComponent';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <h2>Game</h2>
        <StarsMatch />
        <br/>
        <div>
          <Incrementer></Incrementer>
          
        </div>
        <TestES6 />
      
        <LiftStates /> 
        <ThemeContext />
        <StyledComponent />
      </div>
    );
  }
}

export default App;
