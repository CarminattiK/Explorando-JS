// !! Não adicionei comentários neste exercício, pois, conforme mencionado no enunciado do README, reutilizei o mesmo exercício de cálculo de IMC. A única diferença é que, nesta versão, utilizei async e await para a implementação.

async function imc(peso, altura) {
      if (typeof peso  !== 'number' || typeof altura !== 'number') { return Promise.reject(`Os parâmetros precisam ser números`)} return peso / (altura * altura)
}

async function mostrarImc(peso, altura) {
    try {
      console.log(`Realizando o calculo do IMC, para o peso ${peso}KG e altura ${altura}M...`)
  
      const resultado = await imc(peso, altura)
      
      console.log(`De acordo com seu peso e altura, o resultado do IMC foi de ${resultado}.`)
    
      if (resultado < 18.5) {console.log('você se encontra em uma situação de MAGREZA!')
 }     else if (resultado < 25) {console.log('você se encontra em uma situação de NORMAL')
  }    else if (resultado < 30) {console.log('você se encontra em uma situação de SOBREPESO')}
      else if (resultado < 40) {console.log('você se encontra em uma situação de OBESIDADE')}
      else {console.log('você se encontra em uma situação de OBESIDADE GRAVE')}
    } catch (error) {
      console.log(error)
    }
  }
  
mostrarImc(48, 1.55)  
mostrarImc(100, 1.90) 
mostrarImc("teste", 1.81) 
mostrarImc(82, 1.72)  
mostrarImc(57, 1.63)  