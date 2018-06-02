import React, { Component } from 'react';
import '../App.css';
import LoginView from './LoginView';
import GameView from './GameView';


class App extends Component {

  state = {
    loggedIn: false,
    username: '',
    userProgress: ""
  }

  handleLogin = (username) => {
    var storedUser = JSON.parse(localStorage.getItem(username));
    this.setState({ loggedIn: true, username: storedUser.name, userProgress: storedUser });
  }

  handleClearLocal = () =>{
    localStorage.clear();
  }
  render() {
    let loggedInMessage = null;
    if(this.state.loggedIn){
      loggedInMessage = <p> Welcome {this.state.username}, let's play! </p>
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{ loggedInMessage }</h1>
        </header>
        { !this.state.loggedIn && <LoginView handleLogin={this.handleLogin} />}

        { this.state.loggedIn && <GameView userProgress={this.state.userProgress}/>}

        <button onClick={this.handleClearLocal}>Clear localStorage</button>
        
      </div>
    );
  }
}
export default App;