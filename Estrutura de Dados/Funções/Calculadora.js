// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculos. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu

//1= Essas 5 primeiras funções calculam a área de todas as formas geométricas citadas na apresentação do exercício, todas retornando os valores corretos de acordo com a fórmula para calcular.

function calculoTriangulo() {
  const base = parseFloat(prompt("Informe a base do Triângulo"));
  const altura = parseFloat(prompt("Informe a altura do Triângulo"));
  return (base * altura) / 2;
}

function calculoRetangulo() {
  const base = parseFloat(prompt("Informe a base do Retângulo"));
  const altura = parseFloat(prompt("Informe a altura do Retângulo"));
  return base * altura;
}
function calculoQuadrado() {
  const lado = parseFloat(prompt("Informe o lado do Quadrado"));
  return lado * lado;
}

function calculoTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do Trapézio"));
  const baseMenor = parseFloat(prompt("Informe a base menor do Trapézio"));
  const altura = parseFloat(prompt("Informe a altura do Trapézio"));
  return ((baseMenor + baseMaior) * altura) / 2;
}

function calculoCirculo() {
  const raio = parseFloat(prompt("Informe o raio do Circulo: "));
  return 3.14 * raio * raio;
}

//2- Essa função exibe o menu para que o usuário possa escolher qual área ele deseja calcular.
function exibicaoMenu() {
  return prompt(`Isto é uma calculadora geométrica, escolha alguma das opções abaixo 
    
    1- Area do Triângulo
    2- Area do Retãngulo
    3- Area do Quadrado 
    4- Area do Trapézio
    5- Area do Círculo
    6- Sair`);
}

//3- Essa função controla o fluxo do programa, através do laço de repetição DO WHILE, para que seja exibido o menu interativo. Caso o usuário escolha a opção 6 (SAIR), o programa encerra. Caso contrário, o resultado da área é exibido através da estrutura condicional IF.
function executar() {
  let opcoes;

  do {
    opcoes = exibicaoMenu();
    let resultado;

    switch (opcoes) {
      case "1":
        alert("VOCÊ ESCOLHEU CALCULAR A AREA DO TRIÂNGULO");
        resultado = calculotriangulo;
        break;

      case "2":
        alert("VOCÊ ESCOLHEU CALCULAR A AREA DO RETÂNGULO");
        resultado = calculoretangulo;
        break;

      case "3":
        alert("VOCÊ ESCOLHEU CALCULAR A AREA DO QUADRADO");
        resultado = calculoquadrado;
        break;

      case "4":
        alert("VOCÊ ESCOLHEU CALCULAR A AREA DO TRAPÉZIO");
        resultado = calculotrapezio;
        break;

      case "5":
        alert("VOCÊ ESCOLHEU CALCULAR A AREA DO CÍRCULO");
        resultado = calculocirculo;
        break;

      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida! Escolha uma entre as que estão disponíveis.");
        break;
    }

    if (resultado) {
      alert(`O resultado é: ${resultado}`);
    }
  } while (opcoes !== "6");
}

executar();
