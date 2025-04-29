import React from 'react'
import '../styles/Options.css'
import { getUniqueSpecials } from '../hooks/utils/helpers'

interface OptionsProps {
  text: string
  value: boolean
  onChange: (value: boolean) => void
  symbols?: string
  onChangeSymbols: (value: string) => void
}

const Options = (props: Readonly<OptionsProps>) => {
  const handleOnChange = (input: string) => {
    const symbols = getUniqueSpecials(input)
    if (symbols.length === 0) return
    props.onChangeSymbols(symbols)
  }

  return (
    <div className="options">
      <label className="container-select">
        <input
          type="checkbox"
          checked={props.value}
          onChange={() => props.onChange(!props.value)}
        />
        <div className="checkmark"></div>
      </label>
      {!props.symbols ? (
        <span>{props.text}</span>
      ) : (
        <input
          className="symbols"
          type="text"
          value={props.symbols}
          onChange={(e) => handleOnChange(e.target.value)}
        />
      )}
    </div>
  )
}

export default Options
