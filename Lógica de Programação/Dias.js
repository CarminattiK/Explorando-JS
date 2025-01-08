// Dias para Horas
/* Crie um programa em JavaScript que permita ao usuário inserir uma quantidade de dias. O programa deve converter esse valor para horas, utilizando a fórmula: 

Horas = Dias * 24

Após realizar a conversão, o programa deve exibir o valor original em dias e o resultado convertido para horas na tela de forma clara e organizada. */

// 1- Solicita ao usuário que insira a quantidade de dias
const dias = parseFloat(
  prompt(`Informe a quantidade de dias que deseja converter para horas: `)
);

// 2- Calcula o equivalente em horas
const horas = dias * 24;

// 3- Exibe o resultado de forma clara e amigável
alert(
  `$${dias} dia(s) equivalem a ${horas} hora(s). Obrigado por usar o nosso conversor!`
);
