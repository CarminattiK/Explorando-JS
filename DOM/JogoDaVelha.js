// Jogo da Velha 
/* Desenvolva um jogo da velha (tic-tac-toe) utilizando HTML, CSS e JavaScript. O jogo deve atender aos seguintes requisitos:

- Permitir que os jogadores insiram seus nomes antes de começar a partida.
- Exibir o nome do jogador da vez na tela, alternando a cada turno.
- Mostrar um tabuleiro na tela, que deve ser atualizado quando um jogador clicar na célula que deseja marcar.
- Ao clicar em uma célula, deve ser exibido "X" ou "O", conforme o jogador da vez, e não deve ser possível clicar novamente naquela célula.
- Quando um jogador vencer, o nome do vencedor deve ser exibido, e as células que formaram a vitória devem ser destacadas.
- Em caso de empate, uma mensagem informando o empate deve ser exibida.
- Deve haver uma opção para reiniciar o jogo e jogar novamente. */

// !!IMPORTANTE
/* Consegui realizar a o exercício 100% por conta própria sem muitas dificuldades, no entanto o código ficou bem diferente da resolução do professor mas funcionou tudo corretamente como ser. */


let regioes = document.querySelectorAll('#tabuleiro span'); // Está primeira varíável obtem toda a base do tabuleiro
let tabuleiro = []; // No escopo global criei um array para ser manipulado futuramente no código.
let jogador = ''; // Está variável irá me auxiliar com os nomes dos jogadores mais pra frente 

/* 1- Essa função altera o título para mostrar o jogador atual. Ela busca o elemento associado ao jogador e atualiza o texto exibido no cabeçalho */
function mudaTitulo() {
    let jogadorEl = document.getElementById(jogador);
    document.getElementById('jogador').innerText = jogadorEl.value;
}

/* 2- A função 'comecarJogo' reinicia o estado do jogo, limpando o tabuleiro e redefinindo o jogador inicial. Além disso, associa eventos de clique a cada célula. */
function comecarJogo() {
    tabuleiro = [["", "", ""], ["", "", ""], ["", "", ""]];
    jogador = "jogador1";
    document.querySelector('h2').innerHTML = 'Vez de: <span id="jogador"></span>';
    mudaTitulo();
    regioes.forEach(function (el) {
        el.classList.remove('vitoria');
        el.innerText = '';
        el.classList.add('cursor-pointer');
        el.onclick = cliqueTabuleiro;
    });
}

/* 3- Aqui é onde a lógica de vitória é verificada. Esta função verifica todas as combinações possíveis de vitória no tabuleiro e retorna as células vencedoras, se existirem. */
function verificaVitoria() {
    let vitoria = [];
    if (tabuleiro[0][0] && tabuleiro[0][0] === tabuleiro[0][1] && tabuleiro[0][0] === tabuleiro[0][2]) vitoria.push("0.0", "0.1", "0.2");
    if (tabuleiro[1][0] && tabuleiro[1][0] === tabuleiro[1][1] && tabuleiro[1][0] === tabuleiro[1][2]) vitoria.push("1.0", "1.1", "1.2");
    if (tabuleiro[2][0] && tabuleiro[2][0] === tabuleiro[2][1] && tabuleiro[2][0] === tabuleiro[2][2]) vitoria.push("2.0", "2.1", "2.2");
    if (tabuleiro[0][0] && tabuleiro[0][0] === tabuleiro[1][0] && tabuleiro[0][0] === tabuleiro[2][0]) vitoria.push("0.0", "1.0", "2.0");
    if (tabuleiro[0][1] && tabuleiro[0][1] === tabuleiro[1][1] && tabuleiro[0][1] === tabuleiro[2][1]) vitoria.push("0.1", "1.1", "2.1");
    if (tabuleiro[0][2] && tabuleiro[0][2] === tabuleiro[1][2] && tabuleiro[0][2] === tabuleiro[2][2]) vitoria.push("0.2", "1.2", "2.2");
    if (tabuleiro[0][0] && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[0][0] === tabuleiro[2][2]) vitoria.push("0.0", "1.1", "2.2");
    if (tabuleiro[0][2] && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[0][2] === tabuleiro[2][0]) vitoria.push("0.2", "1.1", "2.0");
    return vitoria;
}

/* 4- Aqui temos a função 'desativaRegiao', que remove a possibilidade de interação com a região do tabuleiro que foi clicada, evitando que o jogador mude sua jogada após realizar o clique. */
function desativaRegiao(el) {
    el.classList.remove('cursor-pointer');
    el.onclick = null;
}

/* 5- Quando há um vencedor, esta função destaca as células vencedoras e exibe uma mensagem com o nome do jogador vencedor. */
function ganhaJogo(regioes) {
    for (let i = 0; i < regioes.length; i++) {
        document.querySelector('[data-regiao="' + regioes[i] + '"]').classList.add('vitoria');
    }
    let nome = document.getElementById(jogador).value;
    document.querySelector('h2').innerHTML = nome + ' venceu!';
}

/* 6- Essa é a função principal de interação. Ela captura o clique em uma célula, atualiza o tabuleiro, verifica se há um vencedor ou empate e alterna o jogador. */
function cliqueTabuleiro(e) {
    let el = e.currentTarget;
    let regiao = el.dataset.regiao;
    let linhaColuna = regiao.split('.');
    let linha = linhaColuna[0];
    let coluna = linhaColuna[1];

    if (jogador === 'jogador1') {
        el.innerText = 'X';
        tabuleiro[linha][coluna] = 'X';
    } else {
        el.innerText = 'O';
        tabuleiro[linha][coluna] = 'O';
    }

    desativaRegiao(el);

    let vencedores = verificaVitoria();
    if (vencedores.length > 0) {
        ganhaJogo(vencedores);
    } else if (tabuleiro.flat().includes('')) {
        jogador = jogador === 'jogador1' ? 'jogador2' : 'jogador1';
        mudaTitulo();
    } else {
        document.querySelector('h2').innerHTML = 'Empate!';
    }
}

/* 7 - Por fim, aqui temos o evento de clique do botão 'comecar', que reinicia o jogo quando pressionado. */
document.getElementById('comecar').onclick = comecarJogo;

