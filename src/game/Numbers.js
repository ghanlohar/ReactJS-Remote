import React from 'react';
import range from 'lodash/range';

const Numbers = (props) => {
    const addClass = (x) =>
    {
        if(props.usedNumbers.indexOf(x) >= 0)
        {
            return "used";
        }
        if(props.selection.indexOf(x) >= 0)
        {
            return "selected";
        }
    };
    const addNumberToSelected = (event) => {
        let val = +event.target.innerText;
        event.preventDefault();
        if(props.selection.indexOf(val) === -1)
        {
            props.onNumberClick(val);
        }
    };
    return (
        <div className="text-center">
            
            {Numbers.List.map((item, i) => <span key={i} className={addClass(item)} onClick={addNumberToSelected}>{item}</span>) }
        </div>
    );
}

Numbers.List = range(1,10);
export default Numbers;