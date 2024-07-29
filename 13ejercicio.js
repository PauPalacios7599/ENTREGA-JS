const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param) {
  const index = nameFinder.indexOf(param)
  if (index !== -1) {
    return { found: true, position: index }
  } else {
    return { found: false, position: null }
  }
}

console.log(finderName('Tony'))
console.log(finderName('Bruce'))
console.log(finderName('John'))
