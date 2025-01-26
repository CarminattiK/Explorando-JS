// Área do círculo
/*Crie um programa em JavaScript que permita ao usuário inserir o valor do raio de um círculo. O programa deve calcular a área do círculo utilizando a fórmula:

Área = π * raio² 

Após calcular a área, o programa deve exibir o valor do raio informado e o resultado da área calculada na tela de forma clara e organizada.*/

// 1- Solicita ao usuário que insira o valor do raio do círculo
const raio = parseFloat(
  prompt(`Por gentileza, insira o valor do raio do círculo (em cm):`)
);

// 2- Calcula a área do círculo
const area = 3.14 * (raio * raio);

// 3- Exibe os resultados de forma clara
alert(
  `O raio do círculo informado é ${raio} cm. A área do círculo é aproximadamente ${area.toFixed(
    2
  )} cm².`
);
