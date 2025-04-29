import React from 'react'
import '../styles/Password.css'

interface PasswordProps {
  result: string
  handleClick: () => void
  handleClickCopyButton: () => void
}

const Password = (props: Readonly<PasswordProps>) => {
  return (
    <div className="info">
      <div className="password">
        <span>{props.result}</span>
      </div>
      <div className="buttons">
        <button onClick={props.handleClick}>Gerar</button>
        <button onClick={props.handleClickCopyButton}>Copiar</button>
      </div>
    </div>
  )
}

export default Password
