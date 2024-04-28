import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Introduction from './components/kanhaiya';

const MainComp = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/drkanhaiya" component={Introduction} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}


ReactDOM.render(<BrowserRouter><MainComp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
