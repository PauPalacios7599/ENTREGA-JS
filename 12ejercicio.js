const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(array) {
  const uniqueSet = new Set(array)
  return [...uniqueSet]
}
const result = removeDuplicates(duplicates)
console.log(result)
