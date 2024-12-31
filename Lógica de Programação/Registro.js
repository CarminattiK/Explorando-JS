// Cadastro de Recrutas

/* Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- Primeiro nome

- Sobrenome

- Campo de estudo

- Ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento). */

// 1- Inicializei o código coletando as informações do usuário por meio de variáveis utilizando prompts.
let nome = prompt(`Qual seu primeiro nome? `);
let sobrenome = prompt(`Qual seu sobrenome? `);
let campoDeEstudo = prompt(`Qual seu campo de estudo?`);
let anoDeNascimento = parseFloat(prompt(`Qual foi o ano do seu nascimento?`));

// 2- Por fim, a aplicação exibe o cadastro do recruta. Utilizei a função "confirm" para solicitar que o usuário confirme os dados fornecidos. Acredito que essa abordagem deixa o programa mais dinâmico e interativo.
confirm(`Boas vindas recruta! Seu cadastro foi realizado com sucesso. Confirme os seus dados abaixo.
  
  Primeiro nome: ${nome}
  Sobrenome: ${sobrenome}
  Campo de Estudo: ${campoDeEstudo}
  Idade: ${2024 - anoDeNascimento}`);
