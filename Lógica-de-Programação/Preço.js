// Preço Unitário
/* Crie um programa em JavaScript que permita ao usuário inserir a quantidade de um item (como pães) e o preço unitário do item. O programa deve calcular o preço total utilizando a fórmula:

Preço Total = Quantidade * Preço Unitário

Após realizar o cálculo, o programa deve exibir a quantidade de itens, o preço unitário informado e o valor total calculado na tela de forma clara e organizada. */

alert(`Seja bem-vindo a panificadora!`);

// 1- Solicita ao usuário a quantidade do produto que que deseja comprar (Nesse caso pães)
const quantidade = parseFloat(
  prompt(`Insira a quantidade de pães que você deseja levar `)
);

// 2- Define o preço unitário do(s) produto(s)
const paes = 1.0;

// 3- Calcula o preço total da compra
const precoTotal = quantidade * paes;

//4- Exibe o resultado
alert(
  `Você optou por levar ${quantidade} pães, cada pão está no valor de R$${paes}. Sua compra ficou R${precoTotal}`
);
