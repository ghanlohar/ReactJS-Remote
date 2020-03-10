import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StyledComponent from './StyledComponent';
import StarsMatch from './star-match/StarsMatch';
import ListMain from './userlist/ListMain';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, NavLink , Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import RefExamples from './components/examples/refs/RefExamples';
import MemoExample from './components/examples/memo/MemoExample';
import SuspenseLazy from './components/examples/suspense/SuspenseLazy';



const MainComp = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <BrowserRouter>
                <div>
                    <ul>
                        <li><NavLink exact activeClassName="active"  to="/">Home</NavLink ></li>
                        <li><NavLink activeClassName="active"  to="/game">Game</NavLink ></li>
                        <li><NavLink activeClassName="active"  to="/list">List</NavLink ></li>
                        <li><NavLink activeClassName="active"  to="/styled">Styled Component</NavLink ></li>
                        <li><NavLink activeClassName="active"  to="/refs">Ref Examples</NavLink ></li>
                        <li><NavLink activeClassName="active"  to="/memo">Memo</NavLink ></li>
                        <li><NavLink activeClassName="active"  to="/suspense">Suspense</NavLink ></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/game" component={StarsMatch} />
                        <Route exact path="/list" component={ListMain} />
                        <Route exact path="/list/:id" component={ListMain} />
                        <Route exact path="/styled" component={StyledComponent} />
                        <Route exact path="/refs" component={RefExamples} />
                        <Route exact path="/memo" component={MemoExample} />
                        <Route exact path="/suspense" component={SuspenseLazy} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}


ReactDOM.render(<BrowserRouter><MainComp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

