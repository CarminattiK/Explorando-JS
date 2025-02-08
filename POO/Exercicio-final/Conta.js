// 1- Classe que representa a conta bancária de um usuário
module.exports = class Conta {
    #saldo
    // #depositos
    // #emprestimo
    // #transferencias
  
    constructor(usuario) {
      this.dono = usuario
      this.#saldo = 0
      this.depositos = []
      this.emprestimo = []
      this.transferencias = []
    }

// 2- Getter para acessar o saldo da conta  
    get saldo() {
      return this.#saldo
    }
// 3- Método para adicionar um depósito e atualizar o saldo  
    adicionarDeposito(deposito) {  
        this.#saldo += deposito.valor;  
        this.depositos.push(deposito);
      }
      
// 4- Método para adicionar um empréstimo e atualizar o saldo 
    adicionarEmprestimo(emprestimo) {
      this.#saldo += emprestimo.valor
      this.emprestimo.push(emprestimo)
    }

// 5- Método para registrar transferências (envio ou recebimento de valores)
    adicionarTransferencia(transferencias) {
      if (transferencias.paraUsuario.email === this.dono.email) {
        this.#saldo += transferencias.valor
        this.transferencias.push(transferencias)
      } else if (transferencias.doUsuario.email === this.dono.email) {
        this.#saldo -= transferencias.valor
        this.transferencias.push(transferencias)
      }
    }
  }