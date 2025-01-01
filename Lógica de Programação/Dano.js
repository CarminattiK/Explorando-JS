// Cálculo de Dano
/* Crie um programa que permita inserir o nome e o poder de ataque de um personagem, bem como o nome, os pontos de vida, o poder de defesa e se possui um escudo de outro personagem. O programa deve calcular o dano causado de acordo com as seguintes regras:

- Se o poder de ataque for maior que o poder de defesa e o defensor não tiver escudo, o dano será a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior que o poder de defesa e o defensor tiver escudo, o dano será metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual ao poder de defesa, o dano será zero.

Após calcular o dano, o programa deve subtraí-lo dos pontos de vida do personagem defensor. Por fim, exiba na tela o dano causado e as informações atualizadas de ambos os personagens. */

// 1 - Obtendo os dados do atacante: nome e poder de ataque
const atacante = prompt(`Qual é o nome do personagem atacante?`);
const poderDeAtaque = parseFloat(
  prompt(`Informe tambem o poder de ataque do mesmo:`)
);

// Inicializa a variável de dano com valor 0, para ser usada no cálculo posterior
let dano = 0;

// 2 - Obtendo os dados do defensor: nome, pontos de vida, poder de defesa e se possui escudo
const defensor = prompt(`Qual o nome do personagem defensor?`);
let hp = parseFloat(prompt(`Quantos pontos de vida ele possui?`));
const poderDeDefesa = parseFloat(prompt(`Informe o poder de defesa dele:`));
const escudo = confirm(
  `Esse personagem possui escudo? (OK para Sim/Cancelar para Não)`
); // Solicita confirmação sobre o escudo, utilizando a caixa de diálogo "confirm" para mais dinamismo

// 3 - Cálculo do dano utilizando condicionais com base nas regras fornecidas
if (poderDeAtaque > poderDeDefesa && escudo === false) {
  dano = poderDeAtaque - poderDeDefesa;
  hp -= dano; // Atualiza os pontos de vida do defensor
  alert(
    `O ${defensor} não possuia escudo e foi atacado, levando um total de ${dano} dano `
  );
} else if (poderDeAtaque > poderDeDefesa && escudo === true) {
  dano = (poderDeAtaque - poderDeDefesa) / 2;
  hp -= dano; // Atualiza os pontos de vida do defensor
  alert(
    `O ${defensor} possuia um escudo e foi atacado, recebendo assim um total de ${dano} dano`
  );
} else {
  alert(
    `O ataquede ${atacante} não foi forte o suficiente para causar dano em ${defensor}.`
  );
}

// 4 - Exibição da situação atualizada de ambos os personagens.
alert(`Situação Final dos Personagens!!
  Nome do atacante: ${atacante}
  Poder de ataque: ${poderDeAtaque}

  Nome do defensor: ${defensor}
  Poder de defesa: ${poderDeDefesa}
  Quantidade de vida máxima: ${hp}
  Possui escudo: ${escudo ? "Sim" : "Não"}
  `);
