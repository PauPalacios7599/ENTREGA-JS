const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  if (param.length === 0) return 0

  let sumaTotal = 0
  let cantidadElementos = 0

  for (let elemento of param) {
    if (typeof elemento === 'number') {
      sumaTotal += elemento
    } else if (typeof elemento === 'string') {
      sumaTotal += elemento.length
    }
    cantidadElementos++
  }

  return sumaTotal / cantidadElementos
}

console.log(averageWord(mixedElements))
