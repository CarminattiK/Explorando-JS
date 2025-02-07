const Personagem = require("./Personagem");

// 1- Classe Guerreiro que herda de Personagem tambem
module.exports = class Guerreiro extends Personagem {
  constructor(nome, pontosDeHP, pontosDeAtaque, pontosDeDefesa, pontosDeEscudo) {
    super(nome, pontosDeHP, pontosDeAtaque, pontosDeDefesa);
    this.pontosDeEscudo = pontosDeEscudo; // Pontos de escudo adicionais
    this.postura = 'atacante'; // O Guerreiro inicia na postura de ataque
  }

  // 2- O Guerreiro pode deferir um ataque somente se estiver na postura de ataque
  atacar(alvo) {
    return this.postura === 'atacante' ? super.atacar(alvo) : null;
  }

  // 3- Método que alterna entre as posturas de "atacante" e "defensor"
  alternarPostura() {
    this.postura = this.postura === 'atacante' ? 'defensor' : 'atacante';
    // Se for defensor, adiciona os pontos de escudo à defesa; caso contrário, remove
    this.pontosDeDefesa += this.postura === 'defensor' ? this.pontosDeEscudo : -this.pontosDeEscudo;
  }
};