// Praticando a criação de Classes
/* Implemente uma classe chamada Produto, que deverá conter:

Um atributo nome, definido no momento da criação do objeto.
Um atributo descrição, também atribuído na instanciação.
Um atributo preço, configurado ao criar o produto.
Um atributo emEstoque, iniciado com o valor 0.
Um método adicionarAoEstoque, que recebe uma quantidade como parâmetro e a adiciona ao estoque do produto.
Um método calcularDesconto, que recebe uma porcentagem de desconto e retorna o valor do produto após o desconto aplicado. */

// Classe Produto, responsável por representar um item com informações básicas, como nome, descrição, preço e estoque
class Produto {
  constructor (nome, descricao, preco, emEstoque = 0) {
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.emEstoque = emEstoque
  }

// Método que incrementa a quantidade disponível do produto no estoque
  adicionarAoEstoque(quantidade) {
    this.emEstoque += quantidade
  }


// Método que aplica um percentual de desconto ao preço original e retorna o novo valor
  calcularDesconto(desconto) {
    return this.preco * ((100 - desconto) / 100)
  }
}

// Criando um novo produto, com preço definido, mas sem estoque inicial
const notebook = new Produto("Macbook Pro M4 ", "Novo...", 30.000)

// Acrescentando 15 unidades ao estoque do notebook
notebook.adicionarAoEstoque(15)

// Exibindo todas as informações do produto após a atualização do estoque
console.log(notebook)

// Exibindo o preço do produto com um desconto de 7%
console.log(notebook.calcularDesconto(7))

// Exibindo o preço do produto com um desconto de 12%
console.log(notebook.calcularDesconto(12))

