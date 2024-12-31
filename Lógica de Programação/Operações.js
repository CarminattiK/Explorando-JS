// Calculadora de 4 Operações
/* Escreva um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.*/

/* 1- Nas primeiras linhas do código, criei as variáveis utilizando a função parseFloat, pois estamos lidando com valores numéricos inseridos pelo usuário por meio do prompt, tornando a aplicação mais interativa. */
let num1 = parseFloat(prompt("Por favor digite um número aleatório"));

let num2 = parseFloat(prompt("Agora digite outro número aleatório:"));

//  2- Por fim, exibo os números escolhidos pelo usuário e os resultados das operações matemáticas básicas.
alert(`Os números a serem calculados foram ${num1} e ${num2}:
  
  Soma (+): ${num1 + num2}
  Subtração (-): ${num1 - num2}
  Multiplicação (*): ${num1 * num2}
  Divisão (/): ${num1 / num2}`);
