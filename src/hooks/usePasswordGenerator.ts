import { useState, useCallback } from 'react'
import {
  characterDistribution,
  randomizer,
  shuffleString,
} from './utils/helpers'

interface UsePasswordGeneratorProps {
  totalChar: number
  addCapitalLetters: boolean
  addNumbers: boolean
  symbols?: string
}

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('ev$Y8Pg$oS5#6F')

  const generatePassword = useCallback((props: UsePasswordGeneratorProps) => {
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'

    const { totalChar, symbols, addCapitalLetters, addNumbers } = props
    const {
      totalCapitalLetters,
      totalLowerLetters,
      totalNumbers,
      totalSymbols,
    } = characterDistribution(totalChar, symbols, addCapitalLetters, addNumbers)

    const randNumbers = addNumbers ? randomizer(totalNumbers, numbers) : ''
    const randSymbols = symbols ? randomizer(totalSymbols, symbols) : ''
    const randUpperLetters = addCapitalLetters
      ? randomizer(totalCapitalLetters, upperLetters)
      : ''
    const randLowerLetters = randomizer(
      Math.floor(totalLowerLetters),
      lowerLetters
    )

    const newPassword =
      randSymbols + randLowerLetters + randUpperLetters + randNumbers
    setPassword(shuffleString(newPassword))
  }, [])

  return { password, generatePassword }
}

export { usePasswordGenerator }
