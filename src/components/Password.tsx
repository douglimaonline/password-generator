import React from 'react'
import '../styles/Password.css'

interface PasswordProps {
  result: string
  handleClick: () => void
}

const Password = (props: Readonly<PasswordProps>) => {
  return (
    <div className="info">
      <div className="password">
        <span>{props.result}</span>
      </div>
      <div className="buttons">
        <button onClick={props.handleClick}>Gerar</button>
        <button>Copiar</button>
      </div>
    </div>
  )
}

export default Password
