const Personagem = require("./Personagem");

// 1- Classe Gatuno que herda de Personagem
module.exports = class Gatuno extends Personagem {
  // O ataque do Gatuno é mais forte, por isso o dano é dobrado
  atacar(alvo) {
    const dano = (this.pontosDeAtaque - alvo.pontosDeDefesa) * 2;
    alvo.pontosDeHP -= dano > 0 ? dano : 0;
  }
};
