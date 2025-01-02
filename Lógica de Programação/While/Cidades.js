//Visitando Novas Cidades
/* Crie um programa em JavaScript que solicite o nome de um turista e pergunte se ele já visitou alguma cidade. Se a resposta for "sim", o programa deve perguntar o nome da cidade e armazená-la. O programa deve continuar perguntando sobre outras cidades até que o turista responda "não".

Ao final, exiba o nome do turista, o número total de cidades visitadas e a lista das cidades. */

// 1 - Solicita o nome do turista
const turista = prompt(`Olá turista! por favor, informe seu nome:`);

// 2 - Inicializa as variáveis para armazenar as cidades visitadas e contar o número de visitas
let cidades = "";
let contagem = 0;

//Pergunta inicial sobre se o turista já visitou alguma cidade
let pergunta = prompt("Você ja visitou alguma cidade? (Sim/Não)");

// 3 - Estrutura de repetição que enquanto a resposta for "Sim", o programa continua perguntando os nomes das cidades
while (pergunta === "Sim") {
  // Solicita o nome da cidade visitada e o armazena na variável
  let cidade = prompt(`Qual o nome da cidade que você visitou?:`);
  // Adiciona o nome da cidade à lista, de uma forma que deixe o texto mais organizado na hora da exibição final
  cidades += ` - ${cidade} 
  `;
  contagem++;
  pergunta = prompt(`Você já visitou alguma cidade? (Sim/Não)`);
}

// 4- Exibe o resultado final com todas as informações solicitadas no enunciado.
alert(`Resumo da sua viagem:
    Nome do Turista: ${turista}
    Cidades visitadas: ${contagem}
    Cidades: ${cidades}`);
