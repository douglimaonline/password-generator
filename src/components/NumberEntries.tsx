import React from 'react'
import '../styles/NumberEntries.css'

interface NumberEntriesProps {
  text: string
  value: number
  onChange: (newValue: number) => void
}

const NumberEntries = (props: NumberEntriesProps) => {
  const options = []
  for (let i = 6; i <= 16; i++) {
    options.push(i)
  }

  return (
    <div className="number-entries">
      <div className="select">
        <select
          value={props.value}
          onChange={(e) => props.onChange(Number(e.target.value))}
        >
          {options.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default NumberEntries
