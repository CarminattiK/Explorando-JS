// Conversor de Dias para Anos e Meses
/* Crie um programa em JavaScript que permita ao usuário inserir uma quantidade de dias. O programa deve converter esse valor para meses e anos aproximados, considerando:

- 1 mês como 30 dias.
- 1 ano como 365 dias.

Após realizar a conversão, o programa deve exibir o valor original em dias, o equivalente em meses e em anos, de forma clara e organizada na tela. */

// 1- Solicitação ao usuário que insira a quantidade de dias
const dias = parseFloat(
  prompt(`Por favor, insira a quantidade de dias que deseja converter:`)
);

// 2- Variáveis calculando o equivalente em anos e meses
const ano = dias / 365;
const meses = dias / 30;

// 3- Resultados
alert(
  `${dias} dia(s) é equivalente a aproximadamente ${ano.toFixed(
    2
  )} ano(s) e ${meses.toFixed(2)} mês(es).`
);
