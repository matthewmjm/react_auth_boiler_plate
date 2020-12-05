import './App.css';
import { Component } from 'react';
import SignupForm from './components/SignupForm';

class App extends Component {
  state = {
    user: {}
  }

  signUp = user => { 
    fetch("http://localhost:4000/users/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: user.firstName,
          last_name: user.lastName,
          username: user.username,
          password: user.password
        }
      })
    })
    .then(response => response.json())
    .then(user => this.setState({ user }) )
  }

  render(){
    return (
          <div className="App">
            {this.state.user.username 
              ? <h2>Welcome {this.state.user.first_name}!</h2> 
              : <SignupForm signUp={this.signUp} /> 
            }
          </div>
    );
  }
}

export default App;
