class Carrinho {
    constructor(items) {
        this.items = items
     }

    // 1. calcular a quantidade de produtos no objeto cart.

    calcularQuantidade() {
        let quantidade = this.items.reduce((quantidadeAtual, item) => {
            return (quantidadeAtual + item.quantity)
        }, 0)

        console.log("Quantidade total de produtos no carrinho: " + quantidade)
    }

    // 2. somar o valor total do cart.

    calcularValor() {
        let valor = this.items.reduce((valorAtual, item) => {
            return (valorAtual + (item.price * item.quantity))
        }, 0)

        let valorFormatado = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor / 100)

        console.log("Valor total do carrinho: " + valorFormatado)
    }

    // 3. imprimir o nome de cada produto no cart.

    mostrarNomes() {
        console.log("Produtos do carrinho: ")
        this.items.forEach((element) => {
            console.log(element.title)
        })
    }
}
module.exports = Carrinho


