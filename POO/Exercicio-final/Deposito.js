// Classe que representa um depósito na conta
module.exports = class Deposito {
    constructor(valor) {
      this.valor = valor
      this.dataDeCriacao = new Date() // Data e hora em que o depósito foi criado
    }
  }