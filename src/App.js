import './App.css'
import { useState } from 'react'
import { usePasswordGenerator } from './hooks/usePasswordGenerator'
import Card from './components/Card'
import Password from './components/Password'
import NumberEntries from './components/NumberEntries'
import GenerateButton from './components/GenerateButton'
import Options from './components/Options'
import SnackBar from './components/SnackBar'

function App() {
  const { password, generatePassword } = usePasswordGenerator()
  const [totalChar, setTotalChar] = useState(12)
  const [addCapitalLetters, setAddCapitalLetters] = useState(true)
  const [addNumbers, setAddNumbers] = useState(true)
  const [addSymbols, setAddSymbols] = useState(true)
  const [showSnackBar, setShowSnackBar] = useState(false)
  const [symbols, setSymbols] = useState("!#$%&'()*+,-./:;<=>?@][^_`{|}~")

  const handleClick = () => {
    generatePassword({
      totalChar,
      addCapitalLetters,
      addNumbers,
      symbols: addSymbols ? symbols : null,
    })
  }

  const handleClickCopyButton = () => {
    navigator.clipboard.writeText(password)
    setShowSnackBar(true)
    setTimeout(() => {
      setShowSnackBar(false)
    }, 3000)
  }

  return (
    <div className="App">
      <Card>
        <div style={{ display: 'flex', width: '100%', gap: '1rem' }}>
          <NumberEntries
            value={totalChar}
            onChange={(newTotal) => setTotalChar(newTotal)}
          />
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
        <GenerateButton handleClick={handleClick} />
        <Password
          result={password}
          handleClick={handleClick}
          handleClickCopyButton={handleClickCopyButton}
        />
      </Card>
      <SnackBar showSnackBar={showSnackBar} />
    </div>
  )
}

export default App
