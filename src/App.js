import './App.css'
import { usePasswordGenerator } from './hooks/usePasswordGenerator'
import Card from './components/Card'
import Password from './components/Password'
import NumberEntries from './components/NumberEntries'
import { useState } from 'react'

function App() {
  const { password, generatePassword } = usePasswordGenerator()
  const [totalChar, setTotalChar] = useState(6)

  const handleClick = () => {
    generatePassword({
      totalChar: totalChar,
      addCapitalLetters: true,
      addNumbers: true,
      symbols: '@',
    })
  }

  return (
    <div className="App">
      <Card>
        <Password result={password} handleClick={handleClick} />
        <NumberEntries
          text="Comprimento da Senha"
          value={totalChar}
          onChange={(newTotal) => setTotalChar(newTotal)}
        />
      </Card>
    </div>
  )
}

export default App
