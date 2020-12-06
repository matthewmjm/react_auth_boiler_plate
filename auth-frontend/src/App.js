import './App.css';
import { Component } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
const baseUrl = "http://localhost:4000/"

class App extends Component {
  state = {
    user: {},
    error: ""
  }

  signUp = user => { 
    fetch(baseUrl + "users", {
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

  login = (username, password) => {
    fetch(`${baseUrl}login`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      if(result.token){
        localStorage.setItem('token', result.token)
        this.setState({
          user: result.user
        })
      } else {
        this.setState({
          error: result.error
        })
      }
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user.username 
          ? <h2>Welcome {this.state.user.first_name}!</h2> 
          : (
            <>
              <SignupForm signUp={this.signUp} /> 
              <LoginForm login={this.login} error={this.state.error} />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
