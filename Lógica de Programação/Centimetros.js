// Conversor de Centímetros para Metros
/* Crie um programa em JavaScript que permita ao usuário inserir um valor em metros. O programa deve converter esse valor para centímetros utilizando a fórmula:

Centımetros = Metros × 100

Após realizar a conversão, o programa deve exibir o valor original em metros e o resultado convertido para centímetros na tela de forma clara e organizada. */

// 1- Variável que solicita ao usuário que insira um valor em metros
const metros = parseFloat(
  prompt(`Por favor, insira um valor em metros para conversão em centímetros:`)
);

// 2- Calcula o valor correspondente em centímetros utilizando a fórmula
const centímetros = metros * 100;

// 3- Resultado da conversão
alert(
  `Você informou ${metros} metros. Convertido, isso equivale a ${centímetros} centímetros.`
);
