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

//!! APÓS HORAS TENTANDO SEM SUCESSO, PASSEI A ACOMPANHAR A RESOLUÇÃO DO PROFESSOR, EVITANDO AO MÁXIMO COPIAR O CÓDIGO E FOCANDO NA LÓGICA PARA ENTENDER O PROCESSO. AINDA ASSIM, TIVE MUITAS DIFICULDADES ATÉ CONCLUIR. DECIDI REVISAR O CÓDIGO AO LONGO DAS PRÓXIMAS SEMANAS PARA REFORÇAR OS CONCEITOS QUE NÃO ASSIMILEI COMPLETAMENTE.

// 1- Importa as classes para a criação de forma dinâmica dos componentes 
import { Componente } from "./Componente.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

// 2- Cria um título <h1> dentro do <body> com o texto "Olá, devs!"
const el = new Componente('h1', 'body', { innerText: 'Olá, devs!' });
console.log(el);

// 3- Modifica a tag para <h2>, recria o elemento e o renderiza novamente
el.tag = 'h2';
el.criar().renderizar();

// 4- Cria um formulário dentro do <body>
const form = new Form('body');

// 5- Cria um label associado ao input de nome
const label = new Label('Nome:', form, { htmlFor: 'nameInput' });

// 6- Cria um input dentro do formulário
const input = new Input(form, { id: 'nameInput', name: 'name' });

// 7- Renderiza os elementos no DOM
form.renderizar();
label.renderizar();
form.addFilhos(input); 

// 8- Por fim, adiciona espaçamentos e novos campos ao formulário
form.addFilhos(
  new Componente('br'), 
  new Componente('br'), 
  new Label('Data de Nascimento:', form, { htmlFor: 'birthdayInput' }), 
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' }) 
);
