function imc(peso, altura) {
    return new Promise((resolve, reject) => {
      if (typeof peso  !== 'number' || typeof altura !== 'number') {
        reject('Os parâmetros precisam ser números')
      } else {
        resolve(peso / (altura * altura))   
}
})
  }

  function mostrarImc(peso, altura) {
    imc(peso, altura).then((result) => {
      console.log(`De acordo com seu peso e altura, o resultado do IMC foi de ${result}.`)
  
      if (result < 18.5) {
        console.log('você se encontra em uma situação de MAGREZA!')
    }
      else if (result < 25) {
        console.log('você se encontra em uma situação de NORMAL')
    }
      else if (result < 30) {
        console.log('você se encontra em uma situação de SOBREPESO')
    }
      else if (result < 40) {
        console.log('você se encontra em uma situação de OBESIDADE')
    }
      else {
        console.log('você se encontra em uma situação de OBESIDADE GRAVE')
    }
    }).catch((err) => {
      console.log(err)
    })

    console.log(`Realizando o calculo do IMC, para o peso ${peso}KG e altura ${altura}M...`)
  }

mostrarImc(48, 1.55)
mostrarImc(100, 1.90)
mostrarImc("teste", 1.81)
mostrarImc(82, 1.72)
mostrarImc(57, 1.63)