// Calculadora de Média Ponderada
/* Crie um programa em JavaScript que permita ao usuário inserir três notas e seus respectivos pesos. O programa deve calcular a média ponderada utilizando a fórmula:

Média Ponderada = (Nota1 * Peso1) + (Nota2 * Peso2) + (Nota3 * Peso3) / Peso1 + Peso2 + Peso3 

Após calcular a média ponderada, o programa deve exibir as notas, os pesos informados e o resultado da média ponderada na tela de forma clara e organizada. */

// 1- Exibe uma mensagem inicial pedindo que preencha os campos
alert(
  `Para calcular a média ponderada, preencha as informações solicitadas abaixo.`
);

// 2- Solicita ao usuário os valores dos pesos e das notas
const nota1 = parseFloat(prompt(`Digite o valor  da primeira nota :`));
const nota2 = parseFloat(prompt(`Digite o valor da segunda nota :`));
const nota3 = parseFloat(prompt(`Digite o valor da terceira nota :`));

const peso1 = parseFloat(prompt(`Digite o valor do primeira peso :`));
const peso2 = parseFloat(prompt(`Digite o valor do segunda peso :`));
const peso3 = parseFloat(prompt(`Digite o valor do terceira peso :`));

// 3- Calcula a média ponderada de forma correta
const mediaPonderada =
  nota1 * peso1 + nota2 * peso2 + (nota3 * peso3) / peso1 + peso2 + peso3;

// 4- Exibe um resumo das notas, pesos e o valor final da média
alert(`
  Aqui está o resultado do cálculo:

  Notas: 
  - Primeira nota: ${nota1}
  - Segunda nota: ${nota2}
  - Terceira nota: ${nota3}

  Pesos: 
  - Primeiro peso: ${peso1}
  - Segundo peso: ${peso2}
  - Terceiro peso: ${peso3}
  
  Média ponderada calculada: ${mediaPonderada.toFixed(2)}`);
