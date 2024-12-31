/* Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
 - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
 - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
 - O menu deve ter a opção de salvar um imóvel.
 - Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem. */
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

/* 1- Criei uma array vazio para armazenar os imóveis(objetos), junto tambem está uma variável para o menu */

const listaImoveis = [];
let menu;

/* 2= Em seguida usei o laço de repetição DO WHILE para criar o meu menu */
do {
  menu = prompt(`Contagem de imóveis ${listaImoveis.length}
    
    Escolha uma das opções abaixo;
    
    1- Salvar imóveis
    2- Mostrar imóveis salvos 
    3- Sair`);

  /* 3- Utilizei a estrutura condicional SWITCH, pois acredito ser a melhor opção para realizar o exercício proposto e oferecer uma melhor experiência para o usuário */
  switch (menu) {
    case "1": // Coleta detalhes do imóvel e o salva
      /* 4- Aqui realizei a criação de um objeto inicialmente vazio, para armazenar os dados do imóvel */
      const imovel = {};

      imovel.proprietario = prompt("Digite o nome do proprietário: ");
      imovel.quartos = parseFloat(
        prompt("Quantos quartos esse imóvel possui: ")
      );
      imovel.banheiro = parseFloat(
        prompt("Quantos banheiros esse imóvel possui?")
      );
      imovel.garagem = prompt("Tem garagem? (SIM/NÃO)");

      /* 5- Pedi para o usuário uma confirmação dos dados coletados, o que também tornará o exercício mais dinâmico e auxiliará na hora de salvar o objeto no array. */
      const confirmacao =
        confirm(`Por gentileza, confirme abaixo os dados do imóvel que você deseja salvar: 
        Nome do proprietário: ${imovel.proprietario}
        Quantidade de quarto(s): ${imovel.quartos}
        Banheiro(s): ${imovel.banheiro}
        Possui garagem: ${imovel.garagem}`);

      /* 6- Com base na resposta do usuário o IF serve para salvar o objeto no array */
      if (confirmacao) {
        listaImoveis.push(imovel);
      }
      break;

    case "2": // Exibe os imóveis salvos
      /* 7- Utilizei o FOR para percorrer cada um dos objetos dentro da lista, de forma que fosse possível exibir cada um deles conforme fossem sendo salvos. */
      for (let i = 0; i < listaImoveis.length; i++) {
        alert(`${i + 1}º Imóvel: 

            Proprietário: ${listaImoveis[i].proprietario}
            Quatidade de quarto(s): ${listaImoveis[i].quartos}
            Quantidade de banheiro(s): ${listaImoveis[i].banheiro}
            Possui garagem: ${listaImoveis[i].garagem}`);
      }
      break;

    case "3": // Encerra o programa
      alert("Saindo...");
      break;
    default: /* Resposta padrão para caso o usúario não respeite as opções fornecidas */
      alert("Opção inválida! Escolha entre as opções disponiveis ");
      break;
  }
} while (
  menu !== "3"
); /* 7- Por fim, é feita uma verificação. Se o usuário digitar “3”, a operação é encerrada; caso contrário, o menu continua executando */
