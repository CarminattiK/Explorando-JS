// Taxa de Câmbio
/* Crie um programa em JavaScript que permita ao usuário inserir um valor em dólares (USD). O programa deve converter esse valor para euros (EUR) utilizando a taxa de câmbio atual:  

Euros = Doláres * 0.97 

Após realizar a conversão, o programa deve exibir o valor original em dólares, a taxa de câmbio e o valor convertido para euros na tela de forma clara e organizada.*/

// 1- Define a taxa de câmbio fixa (Para conscientização do usuário. )
const taxaDeCambio = 0.97;

// 2- Solicita ao usuário que insira um valor em dólares para conversão
const dolar = parseFloat(
  prompt(
    `Olá! Vamos converter dólares para euros. Por favor, insira o valor em dólares que deseja converter:`
  )
);

// 3- Exibição de uma mensagem informando que o cálculo será baseado na taxa do dia
alert(
  `Vamos calcular com base na taxa de câmbio do dia de hoje (10/01/2025): 1 USD = ${taxaDeCambio} EUR.`
);

// 4- Calcula o valor em euros.
const euros = dolar * taxaDeCambio;

// 5- Exibe o resultado formatado para o usuário
alert(
  `Você inseriu US$${dolar.toFixed(
    2
  )}. Com a taxa de câmbio atual, isso equivale a €${euros.toFixed(
    2
  )}. Obrigado por utilizar nosso conversor!`
);
