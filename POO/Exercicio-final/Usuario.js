const Conta = require("./Conta")

// 1- Classe que representa um usuário do sistema
module.exports = class Usuario {
  constructor(email, nomeCompleto) {
    this.email = email
    this.nomeCompleto = nomeCompleto
    this.conta = new Conta(this) // Cada usuário possui uma conta bancária 
  }
}