// Classe que representa uma transferência entre os usuários
module.exports = class Transferencia {
    constructor(doUsuario, paraUsuario, valor) {
      this.doUsuario = doUsuario
      this.paraUsuario = paraUsuario
      this.valor = valor
      this.dataDeCriacao = new Date() // Data e hora da transferência
    }
  }