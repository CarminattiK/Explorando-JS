// Conversor de Quilogramas para Gramas.
/* Crie um programa em JavaScript que permita ao usuário inserir um valor em quilogramas. O programa deve converter esse valor para gramas utilizando a fórmula:

Gramas = Quilogramas x 1000

Após realizar a conversão, o programa deve exibir o valor original em quilogramas e o resultado convertido para gramas na tela de forma clara e organizada.*/

// 1- Solicita ao usuário que insira um valor em quilogramas
const quilogramas = parseFloat(
  prompt(
    `Por gentileza, insira o peso em quilogramas que deseja converter para gramas:`
  )
);

// 2- Calcula o valor correspondente em gramas utilizando a fórmula
const gramas = quilogramas * 100;

// 3- Resultado da conversão
alert(
  `O valor inserido foi ${quilogramas} kg. Convertido, ele equivale a ${gramas} g. Obrigado por usar o conversor!`
);
