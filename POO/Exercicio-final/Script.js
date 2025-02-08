const App = require("./App");

// 1- Criação dos usuários no sistema
App.criarUsuario("bruno@email.com", "Bruno Felipe");
App.criarUsuario("wendis@email.com", "Wenderson Oliveira");
App.criarUsuario("ellen@email.com", "Ellen Silva");

// 2- Realização de um depósito na conta do Bruno
App.deposito("bruno@email.com", 155);

// 3- Transferência de Bruno para Wenderson
App.transferencia("bruno@email.com", "wendis@email.com", 30);

// 4- Alteração da taxa de empréstimo para 40%
App.alterarTaxasDeEmprestimo(40);

// 5- Empréstimo solicitado por Ellen no valor de 4000 em 38 parcelas
App.pegarEmprestimo("ellen@email.com", 4000, 38);

// 6- Exibindo as informações dos usuários e suas contas no formato de tabela
console.table([App.encontrarUsuario("bruno@email.com")]);
console.table([App.encontrarUsuario("bruno@email.com").conta]);
console.table([App.encontrarUsuario("wendis@email.com")]);
console.table([App.encontrarUsuario("wendis@email.com").conta]);
console.table([App.encontrarUsuario("ellen@email.com")]);
console.table([App.encontrarUsuario("ellen@email.com").conta]);

// 7-  Exibindo as parcelas do empréstimo de Ellen
console.table(App.encontrarUsuario("ellen@email.com").conta.emprestimo[0].parcelas);