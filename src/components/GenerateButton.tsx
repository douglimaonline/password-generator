import React from 'react'
import '../styles/GenerateButton.css'

interface GenerateButtonProps {
  handleClick: () => void
}

const GeneratePassword = (props: Readonly<GenerateButtonProps>) => {
  return (
    <div className="button">
      <button onClick={props.handleClick}>Gerar</button>
    </div>
  )
}

export default GeneratePassword
