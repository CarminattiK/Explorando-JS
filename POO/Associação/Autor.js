// Simulação de um Blog com conceitos básico de POO
/*  */

// 1- Importando a classe Postagem para que o autor possa criar publicações
const Postagem = require("./Postagem");

// 2- Classe com responsábilidade de representar um autor dentro do blog
class Autor {
  constructor(nome) {
    this.nome = nome; 
    this.postagens = []; // Lista que armazena todas as postagens feitas pelo autor
  }

  // 3- Método para criar e publicar uma nova postagem
  publicarPost(titulo, corpo) {
    const post = new Postagem(titulo, corpo, this); // Cria uma nova postagem associada ao autor
    this.postagens.push(post); // Adiciona a postagem à lista do autor
    return post; // Retorna a postagem criada
  }
}

// 4- Exportando a classe Autor 
module.exports = Autor;