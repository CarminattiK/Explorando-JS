/* Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência.
 - A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
 - Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
 - um campo de texto para o nome da tecnologia
 - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
 - um botão de remover que deve excluir essa linha.
 - O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()
 Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento. */

//!!IMPORTANTE: A partir de agora, como não consegui resolver o exercício sozinho, vou comentar no meu código as explicações sobre como cheguei ao resultado desejado, com base nos comentários do professor ao longo das aulas de resolução, e também um pouco do que achei sobre as coisas que foram feitas."

/* 1- Aqui começamos criando algumas funções auxiliares para agilizar o processo de criação dos elementos, já que faremos isso várias vezes. Achei muito legal isso, sinceramente foi algo que passou de longe na minha cabeça na hora de resolver, eu faria de uma forma bem diferente e nada CLEAN o que deixaria meu código enorme e bem desorganizado. */
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

/* 2 - Aqui, criamos algumas variáveis globais que me deixaram esperançoso, de certo modo, pois foi a primeira coisa que fiz ao tentar resolver o exercício. Exceto a última variável, a qual eu não fazia ideia de que precisaria ter uma contagem de linhas, mas depois entendi e achei genial. */
const addTechnology = document.getElementById("addTechnology");
const form = document.getElementById("devRegister");
const developers = [];
let inputRows = 0;

/* 3- Aqui, eu precisaria de muitas linhas para explicar parte por parte desse algoritmo, mas, resumidamente, criei o evento do botão que adiciona os novos campos no formulário. (Pretendo explicar detalhe por detalhe de uma forma mais clara quando fizer minha própria resolução do exercício). */

addTechnology.addEventListener("click", function (ev) {
  const stackList = document.getElementById("stackList");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, "", "techName");

  const expLabel = createLabel("Experiência: ");
  const id1 = "expRadio-" + rowIndex + ".1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", id1);
  const id2 = "expRadio-" + rowIndex + ".2";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id2);
  const id3 = "expRadio-" + rowIndex + ".3";
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  const expLabel3 = createLabel("5+ anos", id3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    stackList.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  );

  stackList.appendChild(newRow);
});

// 4- Por fim, adicionamos o evento de submissão do formulário:

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const developmentName = document.getElementById("development-name").value;
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    const techName = row.querySelector('input[name="techName"]').value;
    const techExp = row.querySelector('input[type="radio"]:checked').value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = {
    developmentName: developmentName,
    technologies: technologies,
  };
  developers.push(newDev);
  alert("Dev cadastrado com sucesso!");

  form.reset();
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
