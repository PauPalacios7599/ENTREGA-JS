const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(param) {
  let longestWord = ''
  for (let i = 0; i < param.length; i++) {
    const wordWithoutDots = param[i].replace(/\./g, '')
    if (wordWithoutDots.length > longestWord.replace(/\./g, '').length) {
      longestWord = param[i]
    }
  }

  return longestWord
}

console.log(findLongestWord(avengers))
