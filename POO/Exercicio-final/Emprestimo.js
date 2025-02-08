const Parcelas = require("./Parcelas")

// 1- Classe que representa um empréstimo no bacon
module.exports = class Emprestimo {
  static #taxa = 1.05

  constructor(valor, parcelas) {
    this.valor = valor
    this.parcelas = []

// 2- Criação das parcelas com o valor ajustado pela taxa de juros
    for (let i = 1; i <= parcelas; i++) {
      this.parcelas.push(new Parcelas((valor * Emprestimo.#taxa) / parcelas, i))
    }
    this.dataDeCriacao = new Date()
  }

// 3- Getter para acessar a taxa de juros atual
  static get taxa() {
    return Emprestimo.#taxa
  }

// 4- Setter para alterar a taxa de juros (converte porcentagem para fator multiplicador)
  static set taxa(porcentagemDaTaxa) {
    Emprestimo.#taxa = 1 + (porcentagemDaTaxa / 100)
  }
}