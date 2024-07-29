const numeros = [1, 2, 3, 5, 45, 37, 58]

function sumarTodos(param) {
  return param.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
}
console.log(sumarTodos(numeros))
