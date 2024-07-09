// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

// 1- Assim como no exercício do consultório, criei um array vazio para representar as cartas no baralho e a variável "menu", que vamos usar para a exibição do mesmo.
const cartas = [];
let menu = "";

do {
  // 2- Dentro do DO WHILE, fiz o mesmo procedimento de costume com o menu interativo e na estrutura do SWITCH fui elaborando os "Cases" de acordo com a necessidade do exercício.
  menu = prompt(
    `Cartas no baralho: ${cartas.length}

1- Adicionar carta
2- Puxar carta
3- Sair`
  );

  switch (menu) {
    case "1": // Essa variável serve para o usuário citar qual carta ele deseja adicionar no baralho. Após isso, com a propriedade de array chamada PUSH, mandamos a variável com a carta desejada para o array CARTAS.
      const novaCarta = prompt("Qual é a carta que deseja adicionar?");
      cartas.push(novaCarta);
      break;
    case "2": // Esse caso é o contrário do anterior. Em vez de adicionar uma carta, vamos remover o último elemento do ARRAY com o método POP. Em seguida, também é feita uma verificação utilizando IF ELSE, como no exercício anterior, para saber se há alguma carta no baralho.
      const cartaPuxada = cartas.pop();
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho no momento!");
      } else {
        alert("Você puxou um(a) " + cartaPuxada);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida! Escolha entre as opções disponíveis.");
  }
} while (menu !== "3");
