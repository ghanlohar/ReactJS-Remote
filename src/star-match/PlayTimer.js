import React from 'react';

const PlayTimer = (props) => {
    return <div className="timer">Time Remaining: {props.secondsLeft}</div>
}

export default PlayTimer;