// Simulação de um Blog com conceitos básico de POO
/*  */

// 1- Classe responsável por representar os comentários de uma postagem 
class Comentarios {
  constructor(usuario, conteudo) {
    this.usuario = usuario; 
    this.conteudo = conteudo; 
    this.dataDeCriacao = new Date(); // Data e hora em que o comentário foi criado
  }
}

// 2- Exportando a classe Comentarios para ser utilizada em outros módulos do projeto
module.exports = Comentarios;