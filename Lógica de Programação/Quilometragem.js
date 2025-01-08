// Conversor de KM/H para M/S
/* Crie um programa em JavaScript que permita ao usuário inserir uma velocidade em quilômetros por hora (km/h). O programa deve converter essa velocidade para metros por segundo (m/s) utilizando a fórmula: 

m/s = km/h / 3.6 

Após realizar a conversão, o programa deve exibir o valor original em km/h e o resultado convertido para m/s na tela de forma clara e organizada.*/

// 1- Solicita o valor da velocidade em km/h
const quilometragemPorHora = parseFloat(
  prompt(
    `Por favor, insira o valor da velocidade em km/h que deseja converter: `
  )
);

// 2- Calcula o equivalente em m/s
const metrosPorSegundo = quilometragemPorHora / 3.6;

// 3- Exibição do resultado
alert(
  `${quilometragemPorHora} km/h é equivalente a ${metrosPorSegundo.toFixed(
    2
  )} m/s.`
);
