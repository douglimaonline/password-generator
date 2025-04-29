import './App.css'
import { useState } from 'react'
import { usePasswordGenerator } from './hooks/usePasswordGenerator'
import Card from './components/Card'
import Password from './components/Password'
import NumberEntries from './components/NumberEntries'
import Options from './components/Options'

function App() {
  const { password, generatePassword } = usePasswordGenerator()
  const [totalChar, setTotalChar] = useState(12)
  const [addCapitalLetters, setAddCapitalLetters] = useState(true)
  const [addNumbers, setAddNumbers] = useState(true)
  const [addSymbols, setAddSymbols] = useState(true)
  const [symbols, setSymbols] = useState("!#$%&'()*+,-./:;<=>?@][^_`{|}~")

  const handleClick = () => {
    generatePassword({
      totalChar,
      addCapitalLetters,
      addNumbers,
      symbols: addSymbols ? symbols : null,
    })
  }

  const handleClickCopyButton = () => navigator.clipboard.writeText(password)

  return (
    <div className="App">
      <Card>
        <Password
          result={password}
          handleClick={handleClick}
          handleClickCopyButton={handleClickCopyButton}
        />
        <NumberEntries
          text="Comprimento da Senha"
          value={totalChar}
          onChange={(newTotal) => setTotalChar(newTotal)}
        />
        <div style={{ display: 'flex', width: '100%', gap: '1rem' }}>
          <Options
            text="A-Z"
            value={addCapitalLetters}
            onChange={(e) => setAddCapitalLetters(e)}
          />
          <Options
            text="0-9"
            value={addNumbers}
            onChange={(e) => setAddNumbers(e)}
          />
          <Options
            value={addSymbols}
            symbols={symbols}
            onChange={(e) => setAddSymbols(e)}
            onChangeSymbols={(e) => setSymbols(e)}
          />
        </div>
      </Card>
    </div>
  )
}

export default App
