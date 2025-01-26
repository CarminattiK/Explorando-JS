// Conversor de graus Celsius para Fahrenheit
/* Crie um programa em JavaScript que permita ao usuário inserir uma temperatura em graus Celsius. O programa deve converter essa temperatura para Fahrenheit utilizando a fórmula:

𝐹 =(𝐶×9/5)+32

Após realizar a conversão, o programa deve exibir o valor original em Celsius e o resultado convertido para Fahrenheit na tela.*/

// 1- Variável para inserir um valor em graus Celsius
const celsius = parseFloat(
  prompt(`Digite a temperatura em graus Celsius para conversão: `)
);

// 2- Calcula o valor correspondente em Fahrenheit utilizando a fórmula de conversão
const fahrenheit = (celsius * 9) / 5 + 32;

// 3- Exibe o resultado da conversão em uma mensagem dinâmica ao usuário
alert(
  `A temperatura de ${celsius}°C equivale a ${fahrenheit.toFixed(
    2
  )}°F. Conversão concluída com sucesso!`
);
