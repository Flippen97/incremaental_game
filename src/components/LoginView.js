import React, { Component } from 'react';

class LoginView extends Component{
    state = {
        username: '',
        error: ''
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.username.length < 5 ){
            this.setState( {error: "Username too short"} )
        }
        else if(localStorage.getItem(this.state.username) === null) {
            let user = {
                name: this.state.username,
                stone: 0,
                axeLevel: 1,
                workers: 0,
                robotMiner: 0,
                driller: 0,
                bigMachine: 0
            }
            localStorage.setItem(this.state.username, JSON.stringify(user));
            this.props.handleLogin(this.state.username);
          }
        else{
            this.props.handleLogin(this.state.username);
        }
    }

    render(){
        let errorMessage = null;
        if(this.state.error){
            errorMessage = <div>{this.state.error}</div>;
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label forhtml="username">Username</label><br/>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Username" 
                        onChange={this.handleUsername}
                        value={this.state.username}
                    />
                    { errorMessage }
                </div>
                <button type="submit">Login now!</button>
            </form>
        );
    }
}

export default LoginView;