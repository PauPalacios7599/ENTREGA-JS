const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (let key in alien) {
  if (alien.hasOwnProperty(key)) {
    console.log('${key}: ${alien[key]}')
  }
}
