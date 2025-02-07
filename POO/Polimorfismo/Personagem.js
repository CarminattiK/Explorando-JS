

// 1- Classe base para todos os personagens do jogo
class Personagem {
    constructor(nome, pontosDeHP, pontosDeAtaque, pontosDeDefesa) {
      this.nome = nome
      this.pontosDeHP = pontosDeHP
      this.pontosDeAtaque = pontosDeAtaque
      this.pontosDeDefesa = pontosDeDefesa
    }

// 2- Método para atacar outro personagem
    atacar(alvo) {
    // O dano é calculado subtraindo a defesa do alvo do ataque do atacante
    // O HP do alvo é reduzido pelo dano calculado
      alvo.pontosDeHP -= this.pontosDeAtaque - alvo.pontosDeDefesa
    }
  }

  module.exports = Personagem