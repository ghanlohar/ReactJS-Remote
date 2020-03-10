import React, { Component } from 'react';
import axios from 'axios';

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = { username: ''};
    }
    addUserToCards = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.username}`).
        then(resp => 
            {
                this.props.onSubmit(resp.data);
                this.setState({username: ''});
            }
        )
    };
	render(){
        return (
            <form onSubmit={this.addUserToCards}>
                <label htmlFor="user">User</label>
                <input type='text' id="user" value= { this.state.username} 
                onChange= {(event) => {this.setState({username: event.target.value})}} required/> 
                <button type="submit">Add Card</button>
            </form>
        )
    }
}
export default UserForm;
// ref method to get value of input box
//<input type='text' name='userInput' ref={(input)=> { this.username = input}}/>