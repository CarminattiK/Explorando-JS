// Fazendo uso das Classes para manipular o DOM
/* Desenvolva um conjunto de classes em JavaScript para facilitar a manipulação do DOM.

Crie, no mínimo, quatro classes distintas:

Uma classe para representar um elemento genérico do DOM (sugestão: nomeá-la como Component, para evitar conflitos com a implementação do navegador).

Deve conter um atributo privado que armazena a referência ao 
elemento no DOM, com um método de acesso para recuperar esse valor.

Deve possuir um método build, responsável por criar o elemento. 
Esse método deve ser chamado automaticamente no construtor, mas 
também pode ser acionado manualmente pela instância.

Deve incluir um método render, que adiciona o elemento à página sempre que necessário.

Uma classe específica para elementos input, que deve herdar da classe Component.

Uma classe específica para elementos label, também herdando de Component, e que deve permitir definir seu conteúdo textual diretamente no construtor.

Uma classe específica para elementos form, que deve ser uma subclasse de Component e conter um método para adicionar elementos filhos (utilizando instâncias da classe Component e suas subclasses). */

// 1- Classe base para a criação dos elementos HTML 
export class Componente {
    #elemento = null; // Propriedade privada que armazenará o elemento HTML 
  
    constructor(tag, pais, opcoes) {
      this.tag = tag; 
      this.pais = pais; 
      this.opcoes = opcoes; 
      this.criar(); 
    }
  
    // 2- Retorna o elemento HTML vinculado ao componente
    obterElemento() {
      return this.#elemento;
    }
  
    // 3- Cria o elemento HTML com base na tag e adiciona as opções configuradas
    criar() {
      this.#elemento = document.createElement(this.tag);
      Object.assign(this.#elemento, this.opcoes); // Aplica as opções ao elemento
      return this;
    }
  
    // 4- Renderiza o elemento dentro do elemento pai especificado
    renderizar() {
      if (this.pais instanceof Componente) {
        this.pais.obterElemento().append(this.#elemento); 
      } else {
        document.querySelector(this.pais).append(this.#elemento); 
      }
    }
}
