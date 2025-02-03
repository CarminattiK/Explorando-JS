// Simulação de um Blog com conceitos básico de POO
/*  */

// 1- Importando a classe Comentarios de outro módulo para ser utilizada na postagem
const Comentarios = require("./Comentarios")


// 2- Definição da classe Postagem, que representa uma publicação com título, autor, conteúdo e comentários
class Postagem {
  constructor(titulo, autor, corpo) {
    this.titulo = titulo
    this.autor = autor
    this.corpo = corpo
    this.comentarios = [] // Lista para armazenar os comentários relacionados à postagem
    this.dataDeCriacao = new Date() // Data e hora da criação da postagem
  }

  // 3- Método responsável por adicionar um novo comentário à postagem
  addComment(usuario, conteudo) {
    this.comentarios.push(new Comentarios(usuario, conteudo))
  }
}

// 5- Exportando a classe Postagem
module.exports = Postagem