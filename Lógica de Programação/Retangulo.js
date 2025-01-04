// Área do Retângulo
/* Crie um programa em JavaScript que permita ao usuário inserir a base e a altura de um retângulo. O programa deve calcular a área do retângulo utilizando a fórmula:

Area = Base × Altura

Após calcular a área, o programa deve exibir o valor da base, da altura e da área calculada na tela de forma clara e organizada. */

// 1- Solicita ao usuário a medida da base do retângulo
const base = parseFloat(
  prompt(`Por favor, insira a medida da base do retângulo (em metros):`)
);

// 2- Solicita ao usuário a medida da altura do retângulo
const altura = parseFloat(
  prompt(`Agora, insira a medida da altura do retângulo (em metros):`)
);

// 3- Calcula a área do retângulo utilizando a fórmula
const area = base * altura;

// 4- Exibe o resultado ao usuário
alert(
  `Com uma base de ${base} metros e uma altura de ${altura} metros, a área do retângulo é de ${area.toFixed(
    2
  )} metros quadrados.`
);
