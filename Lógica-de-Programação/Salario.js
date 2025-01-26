// Calculadora de Salário Bruto
/* Crie um programa em JavaScript que permita ao usuário inserir a quantidade de horas trabalhadas e o valor recebido por hora considerandos os 30 dias do mês. O programa deve calcular o salário bruto do usuário utilizando a fórmula: 

Salário Bruto = Horas Trabalhadas * Valor por Hora * 30

Após realizar o cálculo, o programa deve exibir a quantidade de horas trabalhadas, o valor por hora informado e o salário bruto calculado na tela de forma clara e organizada.*/

// 1- Solicita ao usuário a quantidade de horas que ele trabalha diariamente
const horas = parseFloat(
  prompt(`Informe quantas horas você trabalha diariamente: `)
);

// 2- Solicita o valor que ele recebe por hora trabalhada
const taxa = parseFloat(
  prompt(`Agora, informe quanto você ganha por hora trabalhada:`)
);

// 3- Calcula o salário bruto mensal com base nas horas trabalhadas por dia (considerando 30 dias no mês)
const salarioBruto = horas * taxa * 30;

// 4- Resultado:
alert(`Conclusão

  - Horas trabalhadas por dia: ${horas}h
  - Valor por hora trabalhada: R$${taxa.toFixed(2)}
  - Salário bruto mensal estimado: R$${salarioBruto.toFixed(2)}

  Obs.: Este cálculo considera que você trabalha todos os dias do mês.`);
