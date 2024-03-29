import React from 'react';

const Button = (props) => {
    let button;
    switch(props.answerIsCorrect) {
  	    case true:
            button =
            <button className="btn btn-success" 
                    onClick={props.acceptAnswer} >
            <i className="fa fa-check"></i>
            </button>;      
        break;
        case false:
            button =
            <button className="btn btn-danger">
                <i className="fa fa-times"></i>
            </button>;      
        break;
        default:
         	button =
            <button className="btn" 
                    onClick={props.checkAnswer} 
                    disabled={props.selection.length === 0}>
            =
            </button>;      
        break;
  }
  return (
    <div className="col-2 text-center">
      {button}<br /><br />
      <button className="btn btn-warning btn-sm" onClick={props.redraw}
              disabled={props.redraws === 0}>
        <i className="fa fa-refresh"></i> {props.redraws}
      </button>

    </div>
  );


    return (
        <div className="col">
            <button className='btn' disabled={props.selection.length === 0}>=</button>
        </div>
    );
} 

export default Button;