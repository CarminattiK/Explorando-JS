const Deposito = require("./Deposito")
const Emprestimo = require("./Emprestimo")
const Transferencia = require("./Transferencia")
const Usuario = require("./Usuario")

// 1- Classe principal da aplicação, responsável por gerenciar os usuários e operações bancárias
module.exports = class App {
  static #usuarios = []

// 2- Método para encontrar um usuário pelo e-mail
  static encontrarUsuario(email) {
    const usuario = this.#usuarios.find(usuario => usuario.email === email)
    return usuario ?? null
  }

// 3- Método para criar um novo usuário
  static criarUsuario(email, nomeCompleto) {
    const usuarioExistente = App.encontrarUsuario(email)
    if (!usuarioExistente) {
      this.#usuarios.push(new Usuario(email, nomeCompleto))
    }
  }

// 4- Método para realizar um depósito na conta de um usuário
  static deposito(email, valor) {
    const usuario = App.encontrarUsuario(email)
    if (usuario) {
      const novoDeposito = new Deposito(valor)
      usuario.conta.adicionarDeposito(novoDeposito)
    }
  }

// 5- Método para realizar uma transferência entre dois usuários  
  static transferencia(doEmailDoUsuario, paraOEmailDoUsuario, valor) {
    const doUsuario = App.encontrarUsuario(doEmailDoUsuario);
    const paraUsuario = App.encontrarUsuario(paraOEmailDoUsuario);
    if (doUsuario && paraUsuario) {
      const novaTransferencia = new Transferencia(doUsuario, paraUsuario, valor);
      doUsuario.conta.adicionarTransferencia(novaTransferencia); 
      paraUsuario.conta.adicionarTransferencia(novaTransferencia);  
    }
  }
  
 // 6- Método para solicitar um empréstimo para um usuário
  static pegarEmprestimo(email, valor, numeroDeParcelas) {
    const usuario = App.encontrarUsuario(email)
    if (usuario) {
      const novoEmprestimo = new Emprestimo(valor, numeroDeParcelas)
      usuario.conta.adicionarEmprestimo(novoEmprestimo)
    }
  }

// 7- Método para alterar a taxa de juros dos empréstimos
  static alterarTaxasDeEmprestimo(novasPorcentagensDeTaxa) {
    Emprestimo.taxa = novasPorcentagensDeTaxa
  }
}