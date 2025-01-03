// Procurando Palíndromos
/* Crie um programa em JavaScript que identifique se uma palavra é um palíndromo. Um palíndromo é uma palavra que, ao ser lida de trás para frente, mantém as mesmas letras na mesma ordem.

O programa deve começar solicitando ao usuário uma palavra e, em seguida, verificar se ela é um palíndromo. Caso seja, exiba uma mensagem confirmando isso. Caso contrário, exiba uma mensagem informando que não é um palíndromo, junto com a palavra lida da esquerda para a direita e da direita para a esquerda. */

// 1- Solicitação de uma palavra para análise
const palavra = prompt("Informe a palavra desejada:");

// 2- Variável para armazenar a palavra invertida
let palavraInvertida = "";

// 3 - Laço de repetição para inverter a palavra
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]; // Adiciona cada letra da palavra original, começando pela última, à variável palavraInvertida
}

// 4 - Condição para verificar se a palavra original é igual à palavra invertida
if (palavra === palavraInvertida) {
  alert(`Afimativo, ${palavra}. É um palíndromo!`);
} else {
  alert(`${palavra}. Não é um palíndromo!
    ${palavra} !== ${palavraInvertida}`);
}

//!! IMPORTANTE
/*Demorei um pouco para realizar este exercício, pois estava com dificuldades para chegar ao resultado final. Percebi que me faltou um pouco de lógica em alguns momentos, mas, felizmente, consegui entregá-lo conforme o enunciado, sem precisar assistir à resolução. Foi um desafio, mas muito gratificante!*/
