// Conversor de Segundos para Horas e Minutos
/* Crie um programa em JavaScript que permita ao usuário inserir uma quantidade de segundos. O programa deve converter esse valor para minutos e horas, utilizando as seguintes conversões:

- 1 minuto = 60 segundos
- 1 hora = 3600 segundos

Após realizar as conversões, o programa deve exibir o valor original em segundos, o equivalente em minutos e o equivalente em horas, de forma clara e organizada na tela. */

// 1- Solicita ao usuário a quantidade de horas para conversão
const horas = parseFloat(prompt(`Por favor, insira o número de horas: `));

// 2- Calcula o equivalente em minutos e segundos
const minutos = horas * 60;
const segundos = horas * 3600;

// 3- Resultado
alert(
  `${horas} hora(s) é equivalente a ${minutos} minuto(s) e ${segundos} segundo(s). Obrigado por usar o conversor!`
);
