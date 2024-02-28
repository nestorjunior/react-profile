import React from "react"
import classNames from 'classnames';
import './Button.scss'

const Button = ({ color, children, onClick, ...rest }) => {
  const baseClasses = 'btn'
  const colorClasses = {
    primary: 'primary',
    secondary: 'secondary'
  }
  const buttonClasses = classNames(baseClasses, colorClasses[color])
  
  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
