const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]
for (const product of products) {
  if (product.toLowerCase().includes('camiseta')) {
    console.log(product)
  }
}
