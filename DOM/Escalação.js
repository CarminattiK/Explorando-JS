// Escalação do Time
// Construa uma página web que permita montar a escalação de um time de jogadores. Nela deverá ser possível:
// Escalar um jogador
// Informar a posição do jogador a ser escalado para o time.
// Informar o nome do jogador.
// Informar o número da camisa do jogador.
// Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
// Após o jogador ser escalado, os campos de texto devem ser limpos.
// Remover um jogador
// Informar o número da camisa do jogador.
// Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então o exclui da lista na página.
// Após o jogador ser removido, o campo de texto deve ser limpo.
// Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

// 1- Para começar meu script, declarei/chamei essa função ainda no HTML para me auxiliar com o evento de click, conseguindo escalar um jogador conforme é pedido no exercício. A dica deixada pelo professor na proposta do exercício ajudou bastante.

function add() {
  // Referenciei em variáveis os inputs através dos IDs que coloquei individualmente em cada um deles e seus valores para que eu pudesse acessá-los mais à frente no exercício.
  const position = document.getElementById("position-player").value;
  const name = document.getElementById("name-player").value;
  const number = document.getElementById("number-player").value;

  // 2- Aplicando um pouco do que aprendi no módulo passado, resolvi fazer essa verificação para que a página exiba um aviso caso o usuário não tenha preenchido todos os campos.
  if (!position || !name || !number) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // 3- Em seguida, fiz a verificação da condição para o usuário confirmar o jogador e sua posição. Caso o usuário confirmasse, comecei a criar a lista constando a posição, o nome do jogador e o número da sua camisa.
  if (confirm(`Você deseja escalar ${name} na posição de ${position}?`)) {
    const team = document.getElementById("team");
    const player = document.createElement("li");
    player.id = `player-${number}`;
    player.innerText = `${position}: ${name} (${number})`;
    team.appendChild(player);

    // 4- Para finalizar essa primeira função, fiz com que cada campo do input fosse limpo após o jogador ser adicionado à lista do time. OBS: Apanhei bastante para fazer isso por mais simples que seja.
    document.getElementById("position-player").value = "";
    document.getElementById("name-player").value = "";
    document.getElementById("number-player").value = "";
  }
}

// 5 - Foi bem tranquilo criar essa função, especialmente depois que todas as peças se encaixaram na primeira função.

// Primeiro, fiz a mesma coisa que na função anterior: armazenei o valor do input na variável "number" e, em seguida, obtive o elemento com o ID que eu havia programado para ser criado junto com cada jogador adicionado à lista. Isso me permitiu trabalhar com esse elemento.
const number = document.getElementById("numberForRemove").value;
const playerForRemove = document.getElementById(`player-${number}`);

// 6 - Aqui fiz a mesma verificação que mencionei anteriormente.
if (!playerForRemove) {
  alert("Jogador não encontrado.");
  return;
}

// 7 - Por fim, usando o ID `player-${number}` e a propriedade remove, consigo remover os jogadores da lista.
if (confirm(`Remover o jogador ${playerForRemove.innerText}?`)) {
  playerForRemove.remove();
  document.getElementById("numberForRemove").value = "";
}
