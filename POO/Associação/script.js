// Simulação de um Blog com conceitos básico de POO
/*  */

// 1- importação da classe Autor para que possamos associar um autor as nossas postangens
const Autor = require("./Autor");

// 2- Cria um autor com o meu nome "Bruno Felipe"
const bruno = new Autor("Bruno Felipe")

// 3- Autor publicando uma nova postagem
const postagem = bruno.publicarPost("Título aleatório", "Lorem ipsum dolor sic amet ...")

// 4- Adicionando dois comentários à postagem
postagem.adicionarComentario("Eduardo", "Muito top mano!")
postagem.adicionarComentario("Gab", "Chamou minha atenção!.")

// 5- E por fim exibindo o autor (eu) e a postagem com seus comentários
console.log(bruno)
console.log(postagem)