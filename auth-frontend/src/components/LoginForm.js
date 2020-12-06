import React, { useState } from 'react';

export default function LoginForm({ login, error }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <label>Username:</label>
            <input name="username" value={username} onChange={event => setUsername(event.target.value)} />
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
            {error ? <p style={{color: 'red'}}>{error}</p> : null}
            <input type="submit" value="Login" />
        </form>
    )
}