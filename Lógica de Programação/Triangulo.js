// Área do Triângulo
/* Crie um programa em JavaScript que permita ao usuário inserir a base e a altura de um triângulo. O programa deve calcular a área do triângulo utilizando a fórmula: 

Área = (base * altura) / 2 

Após calcular a área, o programa deve exibir a base, a altura fornecida e o valor da área calculada na tela de forma clara e organizada.*/

// 1- Solicita ao usuário a medida da base e da altura do triângulo
const base = parseFloat(
  prompt(`Insira a medida da base do triângulo (em cm), por favor:`)
);

const altura = parseFloat(
  prompt(`Agora, insira a medida da base do triângulo (em cm), por favor:`)
);

// 2- Calcula a área do triângulo utilizando a fórmula
const area = (base * altura) / 2;

// 3- Resultado:
alert(`Considerando a base e a altura do triângulo sua area é de ${area}`);
