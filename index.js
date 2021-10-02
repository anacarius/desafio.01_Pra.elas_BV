const Cart = require('./data/cart.json')
const Carrinho = require('./controller/cart')
let items = Cart.items

let cart = new Carrinho(items)
cart.calcularQuantidade()
cart.calcularValor()
cart.mostrarNomes()