// Robô da Tabuada
/* Crie um programa em JavaScript que calcule a tabuada de um número específico (de 1 a 20). O programa deve começar solicitando ao usuário o número base para os cálculos e, em seguida, calcular os resultados das multiplicações desse número de 1 a 20.

Todos os resultados devem ser armazenados em uma variável do tipo string e, ao final, exibidos juntos em formato organizado. O programa deve finalizar após exibir os resultados. */

// Uma mensagem de boas vindas ao usuário =)
alert(`Olá, usuário! Eu robô da tabuada!`);

// 1 - Solicita ao usuário o número base para a tabuada
let n = parseFloat(
  prompt(`Por favor, informe o número que você deseja saber a tabuada: `)
);

// 2 - Declaração da variável para armazenar os resultados formatados dos cálculos como pede o enunciado
let resultado = "";

// 3 - Laço de repetição para calcular a tabuada
for (let f = 1; f <= 20; f++) {
  resultado += `-> ${n} X ${f} = ${n * f}
  `;
}

// 4 - Resultados da tabuada em formato organizado
alert(`Aqui está o resultado da Tabuada de ${n}: 
  ${resultado}`);
