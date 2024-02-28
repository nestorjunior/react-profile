import React from "react"
import Logo from "../components/Logo/Logo"
import TextIntro from "../components/TextIntro/TextIntro"
import Button from "../components/Button/Button"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const handleBtnSignInClick = () => {
    navigate('/login');
  }

  const handleBtnCreateAccountClick = () => {
    navigate('/signup');
  }

  return (
    <>
      <Logo/>
      <TextIntro/>
      <div className="d-grid gap-2">
        <Button color="primary" onClick={handleBtnSignInClick}>
          Sign In
        </Button>
        <Button color="secondary" onClick={handleBtnCreateAccountClick}>
          Create account
        </Button>
      </div>
    </>
  )
}

export default Home
