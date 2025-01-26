// Controle Financeiro
/* Crie um programa em JavaScript que comece solicitando ao usuário a quantidade inicial de dinheiro disponível. Em seguida, exiba um menu com as seguintes opções:

- Adicionar dinheiro: O programa deve perguntar o valor a ser adicionado, somá-lo ao total e exibir o menu novamente com o saldo atualizado.
- Remover dinheiro: O programa deve perguntar o valor a ser subtraído, descontá-lo do total e exibir o menu novamente com o saldo atualizado.
- Sair: Encerra o programa.

O programa deve continuar exibindo o menu até que o usuário escolha a opção de sair.*/

// 1 - Solicita o saldo inicial disponível e o armazena em uma variável
let saldoDisponivel = parseFloat(
  prompt(`Qual seu saldo disponível no momento?`)
);

let opcoes; // Declaração da variável que armazenará a escolha do usuário no menu

// 2 - Estrutura de repetição para exibir o menu até que o usuário escolha "Sair (Que está associado ao numero 3)"
do {
  opcoes = prompt(`Seu saldo atual é de ${saldoDisponivel}
    1- Adiocionar Dinheiro
    2- Remover Dinheiro
    3- Sair`);

  //3- Avalia a escolha do usuário utilizando um switch
  switch (opcoes) {
    case "1":
      let addDinheiro = parseFloat(
        prompt(`Quanto de dinheiro você deseja adicionar?`)
      );
      saldoDisponivel += addDinheiro; // Adiciona o valor ao saldo atual
      break;
    case "2":
      let removerDinheiro = parseFloat(
        prompt(`Quanto de dinheiro você deseja adicionar?`)
      );
      saldoDisponivel -= removerDinheiro; // Subtrai o valor do saldo atual
      break;
      break;
    case "3":
      alert(`Saindo..;`);
      break;
    default:
      alert(`Opção inválida!`);
      break;
  }
} while (opcoes !== "3"); // Condição para manter o loop: enquanto a opção não for "3" (Sair)
