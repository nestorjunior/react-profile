import React from "react"
// import classNames from 'classnames';
import './Input.scss'

const Input = ({type, placeholder, value, onChange, label, ...rest}) => {

  const baseClasses = 'form-control'
  
  return (
    <>
      
      {label && <label>{label}</label>}
      <input 
        className={baseClasses}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        label={label}
        {...rest}
      />

    </>
  )
}

export default Input