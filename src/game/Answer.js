import React from 'react';

const Answer = (props) => {
    return (
        <div className="col">
            {props.selection.map((item, i) => <span key={i} onClick={()=> props.onAnswerClick(item)}>{item}</span>)}
        </div>
    );
} 

export default Answer;