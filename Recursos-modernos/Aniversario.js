// Manipulação de Datas com dayjs
/* Neste desafio, você irá aprimorar uma habilidade essencial para qualquer desenvolvedor: a capacidade de aprender e utilizar bibliotecas externas.

Seu objetivo é criar uma função em JavaScript que receba como parâmetro a data de nascimento de uma pessoa (em formato string) e exiba no terminal:

A idade dessa pessoa na data atual
A próxima data de aniversário no formato “DD/MM/AAAA”
Quantos dias faltam para o próximo aniversário
Para isso, você utilizará a biblioteca dayjs, disponível no npm.

Para aprender a usar o dayjs, acesse o site do npm (https://www.npmjs.com/) e procure por essa biblioteca. Além disso, consulte sua documentação oficial em https://day.js.org/.

Essa aplicação será executada no Node.js, sem uso do navegador.

Além disso, você deve utilizar a sintaxe de módulos CommonJS, ou seja, a função require(), para importar a biblioteca.

Dica: Explore os métodos do dayjs para adicionar períodos a uma data (add), calcular diferenças entre datas (diff) e formatar datas (format).  */

// 1- Importa a biblioteca dayjs
const dayjs = require('dayjs')

// 2- Função principal para calcular informações sobre a data de nascimento
function aniversario(data) { 
    // 3- Converte a string da data de nascimento para um objeto dayjs
    const dataNascimento = dayjs(data)
    // 4- Obtem a data de atual.
    const diaAtual = dayjs()
    // 5- Calcula a idade com base no ano de nascimento
    const idade = diaAtual.diff(dataNascimento, "year")
    // 6- Determina a próxima data de aniversário
    const proximoAniversario = dataNascimento.add(idade + 1, 'year')
    // 7- Calcula quantos dias faltam para o próximo aniversário
    const diasParaAniversário = proximoAniversario.diff(diaAtual, 'day') + 1

    console.log(`Você tem ${idade} anos.`)
    console.log(`Seu próximo aniversário será em: ${proximoAniversario.format("DD/MM/YYYY")}`)
    console.log(`Faltam ${diasRestantes} dias para o seu próximo aniversário.`)
}

//Testa a função com uma data de nascimento
aniversario('2004-05-10')