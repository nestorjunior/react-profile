import React, { useState } from "react"
import './Login.scss'
import Input from "../components/Input/Input"
import Star from "../components/Star/Star"
import Button from "../components/Button/Button"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Login = () => {

  const [email, setEmail] = useState('')
  const [username, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleBtnLoginAccountClick = async (event) => {
    event.preventDefault()
    try {
      if (!email || !username) {
        setError('Please fill in all fields!')
        return
      }

      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}&username=${username}`);
      const users = response.data

      if (users.length > 0) {
        const user = users[0]
        navigate('/dashboard', {state: {user}});
      }else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error login:', error);
      setError('Invalid credentials')
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <div className="loginContainer">
        <Star/>
        <h2>Log in</h2>
        <form className="row g-3">
          <label>Email address</label>
          <Input
            type="email"
            placeholder="helloworld@gmail.com"
            value={email}
            onChange={handleEmailChange}
            autoFocus
          />

          <label>Password</label>
          <Input
            type="password"
            placeholder="type your password"
            value={username}
            onChange={handlePasswordChange}
            autoFocus
          />
        </form>
        {error && <p>{error}</p>}
        <a>Forgot password?</a>
        <Button color="primary" onClick={handleBtnLoginAccountClick}>
          Log In
        </Button>
      </div>
    </>
  )
}

export default Login