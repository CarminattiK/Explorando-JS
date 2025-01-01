// Teste de Velocidade
/*Escreva um programa em JavaScript que permita inserir o nome e a velocidade de dois veículos. Além de exibir qual veículo é mais rápido (ou que as velocidades são iguais), o programa também deve calcular a diferença de velocidade entre os dois veículos e mostrar essa diferença na tela.*/

// 1 - Iniciando o código com a criação de variáveis e prompts para obter as respostas do usuário.
const veiculo1 = prompt(`Qual é o nome do primeiro veiculo?`);
const velocidade1 = parseFloat(prompt(`E qual é a velocidade desse veiculo?`));

const veiculo2 = prompt(`Qual é o nome do segundo veiculo?`);
const velocidade2 = parseFloat(prompt(`E qual sua velocidade?`));

// 2 - Bloco condicional para as verificações propostas no enunciado:
// - Exibir qual veículo é mais rápido;
// - Informar se as velocidades são iguais;
// - Calcular e exibir a diferença de velocidade entre os dois veículos.
if (velocidade1 > velocidade2) {
  const diferenca = velocidade1 - velocidade2; // Calcula a diferença de velocidade quando o primeiro veículo é mais rápido
  alert(
    `${veiculo1} é mais rápido que ${veiculo2} por uma diferença de ${diferenca} km/h.`
  );
} else if (velocidade1 < velocidade2) {
  const diferenca = velocidade2 - velocidade1; // Calcula a diferença de velocidade quando o segundo veículo é mais rápido
  alert(
    `${veiculo2} é mais rápido que ${veiculo1} por uma diferença de ${diferenca} km/h.`
  );
} else {
  alert(`${veiculo1} e ${veiculo2} possuem a mesma velocidade`);
}

// Observação: Certificar de inserir valores numéricos válidos para evitar erros ao calcular a diferença de velocidade.
