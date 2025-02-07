const Personagem = require("./Personagem");

// 1- Classe Mago que herda de Personagem
module.exports = class Mago extends Personagem {
  constructor(nome, pontosDeHP, pontosDeAtaque, pontosDeDefesa, pontosMagicos) {
    super(nome, pontosDeHP, pontosDeAtaque, pontosDeDefesa);
    this.pontosMagicos = pontosMagicos;
  }

 // 2- O ataque do Mago é potencializado pelos seus pontos mágicos
 atacar(alvo) {
    const dano = (this.pontosDeAtaque + this.pontosMagicos) - alvo.pontosDeDefesa;
    alvo.pontosDeHP -= dano > 0 ? dano : 0; // Garante que o dano não seja negativo
  }

// 3- Método para restaurar a vida de um aliado usando pontos mágicos
  restaurarVida(alvo) {
    alvo.pontosDeHP += this.pontosMagicos * 2;
  }
};
