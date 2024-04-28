import React, { Component } from 'react';

import Incrementer from './components/Incrementer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import StarsMatch from './star-match/StarsMatch';
import TestES6 from './TestES6';
import LiftStates from './LiftStates';
import ThemeContext from './ThemeContext';
import StyledComponent from './StyledComponent';
import ListMain from "./userlist/ListMain";
import RefExamples from "./components/examples/refs/RefExamples";
import MemoExample from "./components/examples/memo/MemoExample";
import SuspenseLazy from "./components/examples/suspense/SuspenseLazy";
import NotFound from './NotFound';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

const Home = () => {
  return <div className="App">
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
}


class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
        <ul>
                        <li><NavLink exact activeClassName="active"  to={this.props.match.url + '/'}>Home</NavLink ></li>
                        <li><NavLink activeClassName="active"  to={this.props.match.url + '/game'}>Game</NavLink ></li>
                        <li><NavLink activeClassName="active"  to={this.props.match.url + '/list'}>List</NavLink ></li>
                        <li><NavLink activeClassName="active"  to={this.props.match.url + '/styled'}>Styled Component</NavLink ></li>
                        <li><NavLink activeClassName="active"  to={this.props.match.url + '/refs'}>Ref Examples</NavLink ></li>
                        <li><NavLink activeClassName="active"  to={this.props.match.url + '/memo'}>Memo</NavLink ></li>
                        <li><NavLink activeClassName="active"  to={this.props.match.url + '/suspense'}>Suspense</NavLink ></li>
                    </ul>
                    <Switch>
                        <Route exact path={this.props.match.url + '/'} component={Home} />
                        <Route exact path={this.props.match.url + '/game'} component={StarsMatch} />
                        <Route exact path={this.props.match.url + '/list'} component={ListMain} />
                        <Route exact path={this.props.match.url + '/list:id'} component={ListMain} />
                        <Route exact path={this.props.match.url + '/styled'} component={StyledComponent} />
                        <Route exact path={this.props.match.url + '/refs'} component={RefExamples} />
                        <Route exact path={this.props.match.url + '/memo'} component={MemoExample} />
                        <Route exact path={this.props.match.url + '/suspense'} component={SuspenseLazy} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
      </BrowserRouter>
  
    );
  }
}

export default App;
