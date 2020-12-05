import { Component } from 'react'

class SignupForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.state
        this.props.signUp(user)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <label>First Name:</label>
                <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                <label>Last Name:</label>
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                <label>Username:</label>
                <input name="username" value={this.state.username} onChange={this.handleChange} />
                <label>Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Sign Up" />
            </form>  
        )
    }
}

export default SignupForm;