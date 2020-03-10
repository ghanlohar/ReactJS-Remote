import React from "react";
import { BrowserRouter, NavLink , Switch, Route } from 'react-router-dom';
import DomRef from "./DomRefs";
import FnRef from "./FnRef";
import ClassRef from "./ClassRef";
import NotFound from "../../../NotFound";
import ForwardRef from "./ForwardRef";

class RefExamples extends React.Component{

    render(){
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><NavLink exact  activeClassName="active" to={this.props.match.url + "/"}>DOM</NavLink ></li>
                        <li><NavLink  activeClassName="active"  to={this.props.match.url + "/fn"}>Function Components</NavLink ></li>
                        <li><NavLink activeClassName="active"  to={this.props.match.url + "/cls"}>Class Components</NavLink ></li>
                        <li><NavLink activeClassName="active"  to={this.props.match.url + "/forwardRef"}>Forward Ref</NavLink ></li>
                    </ul>
                    <Switch>
                        <Route exact path={this.props.match.path + '/'} component={DomRef} />
                        <Route exact path={this.props.match.path + '/fn'} component={FnRef} />
                        <Route exact path={this.props.match.path + '/cls'} component={ClassRef} />
                        <Route exact path={this.props.match.path + '/forwardRef'} component={ForwardRef} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
    
}

export default RefExamples;