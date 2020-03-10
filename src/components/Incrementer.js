import React, { Component } from 'react';
import Button from './Button';
import Counter from './Counter';

class Incrementer extends Component
{
	constructor(props){
        super(props);
        this.state = {
            counter: 5
        }
    };
    incrementCounter = (incrementValue) => {
        this.setState((prevState) => {
            return {
            counter: prevState.counter+incrementValue
        };
        });
    }
    render() {
        return (
            <div>
                <Button incrementValue={1} onClickHandler={this.incrementCounter}/>
                <Button incrementValue={5} onClickHandler={this.incrementCounter}/>
                <Button incrementValue={10} onClickHandler={this.incrementCounter}/>
                <Button incrementValue={100} onClickHandler={this.incrementCounter}/>
                
                <Counter counter={this.state.counter}/>
            </div>
        )
    }
}

export default Incrementer;
