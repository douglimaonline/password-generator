import React from 'react'
import '../styles/Options.css'

interface OptionsProps {
  text: string
  value: boolean
  onChange: (value: boolean) => void
  symbols?: string
  onChangeSymbols: (value: string) => void
}

const Options = (props: Readonly<OptionsProps>) => {
  return (
    <div className="options">
      <input
        type="checkbox"
        checked={props.value}
        onChange={() => props.onChange(!props.value)}
      />
      {!props.symbols ? (
        <span>{props.text}</span>
      ) : (
        <input
          type="text"
          value={props.symbols}
          onChange={(e) => props.onChangeSymbols(e.target.value)}
        />
      )}
    </div>
  )
}

export default Options
