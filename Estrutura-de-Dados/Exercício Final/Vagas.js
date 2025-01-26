/* Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos: */
/* Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema Listar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair */
// Listar vagas disponíveis
// Criar um nova vaga
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair
/* A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas. 
-  A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
-  A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
 Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções. */

/* 1- analisando a proposta do desafio essa primeira variável contendo um ARRAY será para armazenar as "vagas". Foi criada em um escopo mais externo para ficar disponível em todas as funções criadas ao decorrer do exercicío. */

const vagas = [];

/* 2- daqui para baixo será criada as funções individuais para que possamos resolver o exercicio de acordo com as necessidades */

// 3- Função para listar todas as vagas disponíveis
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += `${indice}. ${vaga.nome} (${vaga.candidatos.length} candidatos)\n`;
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
} /* 4- Criada com o intuito de facilitar na hora de concatenar os valores e na hora da exibição */

// 5-  Função para criar uma nova vaga
function novaVaga() {
  const nome = prompt("Informe o nome da vaga:");
  const descricao = prompt("Faça uma descrição para a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para a vaga:"
  );

  const confirmacao = confirm(`
    Deseja criar uma nova vaga com essas informações?
    
      Nome: ${nome}
      Descrição: ${descricao} 
      Data limite: ${dataLimite}`);

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!!");
  }
}

// 6- Função para exibir os detalhes de uma vaga específica
function exibirVaga() {
  const indice = prompt("Digite o índice da vaga que deseja exibir:");
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + `\n  - ${candidato}`;
  },
  "");

  alert(
    `Vaga nº ${indice} 
      Nome: ${vaga.nome} 
      Descrição: ${vaga.descricao} 
      Data limite: ${vaga.dataLimite} 
      Quantidade de candidatos: ${vaga.candidatos.length} 
      Candidatos inscritos: ${candidatosEmTexto}`
  );
}

// 7- Função para inscrever um candidato em uma vaga
function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  const indice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    `Deseja inscrever o candidato ${candidato} na vaga 
      ${indice}?
      Nome: ${vaga.nome} 
      Descrição: ${vaga.descricao} 
      Data limite: ${vaga.dataLimite}`
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada com sucesso!!");
  }
}

// 8- Função para excluir uma vaga
function excluirVaga() {
  const indice = prompt("Digite o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    `Tem certeza que deseja excluir a vaga ${indice}?
      Nome: ${vaga.nome} 
      Descrição: ${vaga.descricao} 
      Data limite: ${vaga.dataLimite}`
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}

// 9- Função para exibir o menu de opções para o usuário
function exibirMenu() {
  const opcao = prompt(
    `Cadastro de Vagas de Emprego 
      
    Escolha uma das opções: 
      1. Listar vagas disponíveis
      2. Criar uma nova vaga
      3. Visualizar uma vaga
      4. Inscrever um(a) candidato(a)
      5. Excluir uma vaga
      6. Sair`
  );

  return opcao;
}

// 10- Função principal que controla o fluxo do programa
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

// 11- Inicia a execução do programa
executar();

//!!IMPORTANTE:
/* Tentei por bastante tempo realizar o exercício sem assistir à resolução, mas, infelizmente, não consegui por falta de noção em algumas partes. Depois de assistir algumas vezes e compreender melhor o código como um todo, consegui realizar o desafio. Usei certos elementos que constavam na resolução do professor, mas, na maior parte, procurei fazer do meu jeito e deu certo. */
