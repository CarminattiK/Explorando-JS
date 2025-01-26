// Estatística no Desenvolvimento de software
/* De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de *arrow functions* para calcular as operações abaixo.
Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar uma interface. Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console).

 Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores.
 
 Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
 
 Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
 
 Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto. */

// !! IMPORTANTE
/* Consegui, sem muitas dificuldades, realizar parcialmente este exercício proposto. Encontrei algumas dificuldades nos últimos dois cálculos e tive que acompanhar a resolução do professor */

 // Média Aritmédica Simples
 const mediaSimples = (...numeros) => {
    const soma = numeros.reduce((acumulador, num) => acumulador + num, 0) // Soma todos os números.
    return soma / numeros.length // Divide a soma pelo total de números.
 } 
 console.log(`Média Aritmética Simples: ${mediaSimples(8, 10, 11, 14, 21,)}`)

 // Média Ponderada
 const mediaPonderada = (...numeros) => {
    const soma = numeros.reduce((acumulador, { numero, peso }) => acumulador + (numero * (peso ?? 1)), 0) // Multiplica cada número pelo peso.
    const somaDaMedia = entries.reduce((acumulador, entrada) => acumulador + (entrada.peso ?? 1), 0) // Soma os pesos (assume peso 1 quando não fornecido).
    return soma / somaDaMedia // Divide a soma ponderada pela soma dos pesos.
  } 
  
  console.log(`Média Ponderada: ${somaDaMedia(
    { numeros: 9, peso: 3 },
    { numeros: 7 },
    { numeros: 10, peso: 1 },
  )}`)

  // Mediana
  const mediana = (...numeros) => {
    const numerosOrdernados = [...numeros].sort((a, b) => a - b) // Ordena os números em ordem crescente.
    const meio = Math.floor(numerosOrdernados.length / 2) // Obtém o índice do meio.
    if (numerosOrdernados.length % 2 !== 0) {
      return numerosOrdernados[meio] // Retorna o número do meio se o tamanho for ímpar.
    }
    const primeiraMetade = numerosOrdernados[meio - 1]
    const segundaMetade = numerosOrdernados[meio]
    return media(primeiraMetade, segundaMetade)
  }
  
  console.log(`Mediana: ${mediana(5, 10, 79, 8, 66, 57)}`)
  console.log(`Mediana: ${mediana(25, 46, 2, 444, 12)}`)

  // Moda 
  const moda = (...numeros) => {
     // Cria uma matriz [ [número, quantidade], ... ] com a contagem de cada número.
    const quantidades = numeros.map(num => [
      num,
      numeros.filter(n => num === n).length // Conta quantas vezes o número aparece.
    ])
    quantidades.sort((a, b) => b[1] - a[1]) // Ordena pelos números com maior frequência.
    return quantidades[0][0] // Retorna o número mais frequente.
  }
  
  console.log(`Moda: ${moda(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)