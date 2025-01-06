// Calculadora de Volume de Caixa
/* Crie um programa em JavaScript que permita ao usuário inserir a largura, a altura e o comprimento de uma caixa. O programa deve calcular o volume da caixa utilizando a fórmula:

Volume = Largura * Altura * Comprimento

Após calcular o volume, o programa deve exibir as dimensões fornecidas (largura, altura e comprimento) e o volume calculado na tela de forma clara e organizada. */

// 1- Solicita ao usuário as seguintes medidas: largura, altura e comprimento
const largura = parseFloat(prompt(`Forneça a largura da caixa:`));
const altura = parseFloat(prompt(`Agora a altura:`));
const comprimento = parseFloat(prompt(`Por fim, o comprimento:`));

// 2- Calcula o volume da caixa utilizando a fórmula
const volume = altura * largura * comprimento;

// 5- Exibe o resultado
alert(
  `Com as dimensões fornecidas (largura: ${largura} cm, altura: ${altura} cm e comprimento: ${comprimento} cm), o volume da caixa é ${volume.toFixed(
    2
  )} cm³.`
);
