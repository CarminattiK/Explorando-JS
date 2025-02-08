// 1- Classe que representa uma parcela de um empréstimo
module.exports = class Parcelas {
    constructor(valor, numeros) {
      this.valor = valor
      this.numeros = numeros
      this.status = 'pendente'
    }
  }