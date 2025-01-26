// Conversor de Medidas
/* Crie um programa em JavaScript que funcione como um conversor de medidas. O programa deve solicitar ao usuário um valor em metragen e oferecer opções para converter esse valor para outras unidades de medida. As opções disponíveis são:

Milímetro (mm)
Centímetro (cm)
Decímetro (dm)
Decâmetro (dam)
Hectômetro (hm)
Quilômetro (km)

O programa deve realizar a conversão de acordo com a unidade escolhida e exibir o resultado. Caso o usuário selecione uma opção inválida, o programa deve exibir uma mensagem informando "Opção inválida" e encerrar a execução. Utilize o comando break e o default para implementar essa funcionalidade. */

// Exibe uma mensagem inicial de boas-vindas antes de iniciar a aplicação
alert(`Seja bem-vindo ao conversor de medidas!!`);

// 1- Solicita ao usuário o valor em metros que será convertido
const metragem = parseFloat(
  prompt(
    `Digite um valor em metros para que ele seja convertido para outra unidade de medida.`
  )
);

// 2 - Solicita ao usuário que escolha uma unidade de medida para realizar a conversão
const unidades =
  prompt(`Escolha uma das unidades de medida abaixo para realizar a conversão:
  
  1- Milímetro (mm)
  2- Centímetro (cm)
  3- Decímetro (dm)
  4- Decâmetro (dam)
  5- Hectômetro (hm)
  6- Quilômetro (km)`);

// 3 - Realiza a conversão com base na escolha do usuário.
switch (unidades) {
  case "1":
    alert(
      `${metragem} metragen, equivalem a ${metragem * 1000} milímetro (mm) `
    );
    break;
  case "2":
    alert(
      `${metragem} metragen, equivalem a ${metragem * 100} centímetros (cm) `
    );
    break;
  case "3":
    alert(
      `${metragem} metragen, equivalem a ${metragem * 10} decímetros (dm) `
    );
    break;
  case "4":
    alert(
      `${metragem} metragen, equivalem a ${metragem / 10} decâmetros (dam) `
    );
    break;
  case "5":
    alert(
      `${metragem} metragen, equivalem a ${metragem / 100} hectômetros (hm) `
    );
    break;
  case "6":
    alert(
      `${metragem} metragen, equivalem a ${metragem / 1000} quilômetros (km) `
    );
    break;
  default:
    alert("Opção invalida...");
}
