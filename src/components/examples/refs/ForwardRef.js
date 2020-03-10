
import React, {Fragment} from 'react';
import { BrowserRouter, NavLink , Switch, Route } from 'react-router-dom';
import NotFound from '../../../NotFound';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} disabled className="FancyButton">
      {props.children}
    </button>
  ));

const intermediate = (props)=> {
    const ref = React.createRef();
    
    const OnChangeHandler = (e, ref)=> {
        debugger
        ref.current.disabled = false;
    }

    return(
        <Fragment>
            <input type="text" onChange={(e) => OnChangeHandler(e, ref)}></input>
            <FancyButton ref={ref}>Click me!</FancyButton>
        </Fragment>
    )

}


const ForwardRef = (props) => {
    return (
        <BrowserRouter>
                <div>
                    <ul>
                        <li><NavLink exact activeClassName="active"  to={props.match.url + "/"}>Forward Ref inner</NavLink ></li>
                        <li><NavLink exact activeClassName="active"  to={props.match.url + "/forRef"}>Forward Ref inner</NavLink ></li>
                    </ul>
                    <Switch>
                        <Route exact path={props.match.path + '/'} component={intermediate} />
                        <Route exact path={props.match.path + '/forRef'} component={intermediate} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
        </BrowserRouter>
    )
}

export default ForwardRef;