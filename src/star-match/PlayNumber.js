import React from 'react';

// Color Theme
  const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

const PlayNumber = (props) => {
    const NumberClicked = (e) => {
        console.log(props.number);
        props.addToCandidateNums(props.number, props.status);
    }
   
    return (<button 
                onClick={(event) => NumberClicked(event) } 
                className="number"
                style={{backgroundColor: colors[props.status] }}
                >{props.number}</button>)
}

export default PlayNumber;