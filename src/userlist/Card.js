import React from 'react';

const Card = function(props){
	return (
        <div style={{margin: '1em'}}>
            <img width='75' src={props.avatar_url} alt="Avatar"/>
            <div style={{display:'inline-block', marginLeft: 10, verticalAlign: 'top'}}>
                <div className="Name" style={{fontSize: '1.25em', fontWeight:'bold'}}>{props.name}</div>
                <div className="Company" >{props.company}</div>
            </div>
        </div>
    )
}

export default Card;