export const randomizer = (totalChar: number, list: string): string => {
  let result = ''
  for (let i = 0; i < totalChar; i++) {
    const index = Math.floor(Math.random() * list.length)
    result += list[index]
  }
  return result
}

export const shuffleString = (str: string): string => {
  const arr = str.split('')
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.join('')
}

export function characterDistribution(
  totalChar: number,
  symbols: string | undefined,
  addCapitalLetters: boolean,
  addNumbers: boolean
): {
  totalSymbols: number
  totalCapitalLetters: number
  totalNumbers: number
  totalLowerLetters: number
} {
  const totalSymbols = symbols ? Math.floor(totalChar * 0.2) : 0
  const totalCapitalLetters = addCapitalLetters
    ? Math.floor(totalChar * 0.3)
    : 0
  const totalNumbers = addNumbers ? Math.floor(totalChar * 0.2) : 0
  const totalLowerLetters =
    totalChar - totalSymbols - totalCapitalLetters - totalNumbers

  return {
    totalSymbols,
    totalCapitalLetters,
    totalNumbers,
    totalLowerLetters,
  }
}
