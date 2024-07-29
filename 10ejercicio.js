const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(arr) {
  const suma = arr.reduce((acc, valor) => acc + valor, 0)
  return suma / arr.length
}
const promedio = average(numbers)
console.log(promedio)
