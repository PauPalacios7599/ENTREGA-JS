const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(word) {
  const wordCount = {}
  word.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word]++
    } else {
      wordCount[word] = 1
    }
  })
  return wordCount
}

const result = repeatCounter(counterWords)
console.log(result)
