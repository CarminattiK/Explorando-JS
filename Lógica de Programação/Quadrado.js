// Calculando o Perimetro de um Quadrado
/* Crie um programa em JavaScript que permita ao usuário inserir a medida de um lado de um quadrado. O programa deve calcular o perímetro do quadrado utilizando a fórmula: 

Perímetro = 4 x Lado

Após realizar o cálculo, o programa deve exibir a medida do lado informada e o resultado do perímetro na tela de forma clara e organizada. */

// 1- Variável que solicita ao usuário a medida de um lado do quadrado
const lados = parseFloat(
  prompt(`Insira a medida de um lado do quadrado (em metros):`)
);

// 2- Calcula o perímetro do quadrado
const perimetro = 4 * lados;

// 3- Resultado do cálculo
alert(
  `A medida informada para os lados do quadrado foi de ${lados} metros. Com isso, o perímetro do quadrado é ${perimetro} metros.`
);
