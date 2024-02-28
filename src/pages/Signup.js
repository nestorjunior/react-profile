import React, { useState } from "react"
import './Signup.scss'
import Input from "../components/Input/Input"
import Star from "../components/Star/Star"
import Button from "../components/Button/Button"

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleBtnCreateAccountClick = (event) => {
    event.preventDefault()
    console.log("E-mail submetido:", email);
    console.log("Senha submetida:", password);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordCreate = (event) => {
    setPassword(event.target.value)
  }

  const handlePasswordCreateRepeat = (event) => {
    setPasswordRepeat(event.target.value)
  }

  return (
    <>
      <div className="signupContainer">
        <Star/>
        <h2>Sign up</h2>
        <form className="row g-3">
          <label>Email</label>
          <Input
            type="email"
            placeholder="helloworld@gmail.com"
            value={email}
            onChange={handleEmailChange}
            autoFocus
          />

          <label>Create a password</label>
          <Input
            type="password"
            placeholder="type your password"
            value={password}
            onChange={handlePasswordCreate}
            autoFocus
          />

          <label>Confirm password</label>
          <Input
            type="password"
            placeholder="type your password"
            value={passwordRepeat}
            onChange={handlePasswordCreateRepeat}
            autoFocus
          />

        </form>

        <Button color="primary" onClick={handleBtnCreateAccountClick}>
          Create account
        </Button>
      </div>
    </>
  )
}

export default Signup