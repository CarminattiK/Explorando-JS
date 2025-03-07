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

// 1- Mesmo objetivo do arquivo Input.js, Importa a classe base Componente
import { Componente } from "./Componente.js";

// 2- Classe específica para criar labels no DOM, herdando da classe Componente
export class Label extends Componente {
  constructor(texto, pais, opcoes) {
    super('label', pais, Object.assign({}, opcoes, { textContent: texto }));
  }
}

