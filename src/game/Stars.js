import React from 'react';
import range from 'lodash/range';

const Stars = (props) => {
    
    /*let stars = [];
    for(let i = 0; i < numberOfStars; i++)
    {
        stars.push(<i key= {i} className="fa fa-star"></i>);
    }*/
    return (
        <div className="col">
            {range(1, props.randomNumberOfStars+1).map((item, i) => { return <i key={i} className="fa fa-star"></i>})}
        </div>
    );
} 

export default Stars;