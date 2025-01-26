//Menu interativo
/*Crie um programa em JavaScript que simule um menu interativo com 5 opções. O programa deve exibir as opções disponíveis ao usuário, sendo que as quatro primeiras não precisam executar nenhuma funcionalidade específica. A quinta opção será "Encerrar".

Quando o usuário escolher uma das quatro primeiras opções, uma mensagem deve ser exibida indicando qual foi a escolha, e o menu deve ser mostrado novamente.

Esse ciclo deve continuar até que o usuário escolha a opção "Encerrar". Nesse caso, uma mensagem informando que o sistema está sendo encerrado deve ser exibida, e o programa deve finalizar.*/

// 1 - Declaração da variável que armazenará a escolha do usuário
let opcoes;

// 2 - Estrutura de repetição para exibir o menu até que o usuário escolha "5"
do {
  opcoes = prompt(`Por favor, escolha uma entre as alternativas:
    1- Primeira opção
    2- Segunda Opção
    3- Terceira Opção
    4- Quarta Opção
    5- Encerrar
    `);

  // 3 - Avaliação da escolha do usuário utilizando um switch
  switch (opcoes) {
    case "1":
      alert(`Você escolheu a Primeira opção`);
      break;
    case "2":
      alert(`Você escolheu a Segunda opção`);
      break;
    case "3":
      alert(`Você escolheu a Terceira opção`);
      break;
    case "4":
      alert(`Você escolheu a Quarta opção`);
      break;
    case "5":
      alert(`Encerrando o programa...`);
      break;
    default:
      alert(`Opção inválida! Por favor, escolha uma alternativa válida.`);
      break;
  }
} while (opcao !== "5"); // Condição para manter o loop: enquanto a escolha não for "5"
