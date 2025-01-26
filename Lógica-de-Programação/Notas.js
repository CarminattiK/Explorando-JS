// Calculo de Média
/* Crie um programa em JavaScript que permita ao usuário inserir três notas de um aluno. O programa deve calcular a média dessas notas utilizando a fórmula:

Media = Nota1 + Nota2 + Nota3 / 3
​
Após calcular a média, o programa deve exibir as três notas fornecidas e o resultado da média na tela de forma clara e organizada. */

// 1- Solicita ao usuário todas as nota
const n1 = parseFloat(prompt(`Por favor, forneça a sua primeira nota:`));

const n2 = parseFloat(prompt(`Agora, forneça a sua segunda nota:`));

const n3 = parseFloat(prompt(`Por fim, forneça a sua terceira nota:`));

// 2- Calcula a média das três notas utilizando a fórmula do enunciado
const media = (n1 + n2 + n3) / 3;

// 5- Exibe o resultado da média ao usuário
alert(
  `Você forneceu as notas ${n1}, ${n2} e ${n3}. A sua média final é ${media.toFixed(
    2
  )}. Espero que esteja satisfeito com o resultado!`
);
