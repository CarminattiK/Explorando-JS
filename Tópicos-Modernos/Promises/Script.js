// 1- Função que retorna uma Promise para calcular o IMC
function imc(peso, altura) {
  return new Promise((resolve, reject) => {
      // Verifica se os parâmetros são números
      if (typeof peso !== 'number' || typeof altura !== 'number') {
          reject('Os parâmetros precisam ser números') // Rejeita a Promise caso os valores não sejam numéros
      } else {
          resolve(peso / (altura * altura)) // Resolve a Promise com o valor do IMC 
      }
  })
}

// 2- Função para exibir o IMC e a classificação correspondente
function mostrarImc(peso, altura) {
  imc(peso, altura) // Chama a função IMC e lida com a Promise retornada
      .then((result) => {
          console.log(`De acordo com seu peso e altura, o resultado do IMC foi de ${result}.`)

          // Classificação do IMC conforme a tabela oficial
          if (result < 18.5) {
              console.log('Você se encontra em uma situação de MAGREZA!')
          }
          else if (result < 25) {
              console.log('Você se encontra em uma situação NORMAL')
          }
          else if (result < 30) {
              console.log('Você se encontra em uma situação de SOBREPESO')
          }
          else if (result < 40) {
              console.log('Você se encontra em uma situação de OBESIDADE')
          }
          else {
              console.log('Você se encontra em uma situação de OBESIDADE GRAVE')
          }
      })
      .catch((err) => {
          console.log(err) // Captura e exibe o erro caso os parâmetros não sejam válidos
      })

  // Exibe uma mensagem antes do resultado para evidenciar o funcionamento assíncrono como pede o enunciado
  console.log(`Realizando o cálculo do IMC para o peso ${peso}KG e altura ${altura}M...`)
}

// 3- Testes da função com diferentes valores
mostrarImc(48, 1.55)  // Exemplo de magreza
mostrarImc(100, 1.90) // Exemplo de peso normal
mostrarImc("teste", 1.81) // Exemplo de erro (parâmetro inválido)
mostrarImc(82, 1.72)  // Exemplo de sobrepeso
mostrarImc(57, 1.63)  // Exemplo de peso normal