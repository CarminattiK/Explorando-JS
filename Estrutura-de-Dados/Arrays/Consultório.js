/* Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

/* 1- No escopo mais externo, criei um array vazio para representar a fila de espera de pacientes e a variável "menu", que vamos usar para a exibição do mesmo. */
let filaDeEspera = [];
let menu = "";

do {
  /* 2- Dentro do DO WHILE, criei a variável local "pacientes" para poder fazer a verificação de cada um deles de acordo com sua ordem de chegada na fila. Para isso, utilizei o FOR com o intuito de verificar cada um dos pacientes no ARRAY e atribuir suas posições. Abaixo disso, está nosso menu interativo :). */
  let pacientes = "";
  for (let i = 0; i < filaDeEspera.length; i++) {
    pacientes += `${i + 1}º - ${filaDeEspera[i]}\n`;
  }

  menu = prompt(
    `Pacientes: 
${pacientes}
1 - Adicionar novo paciente
2 - Consultar paciente
3 - Sair`
  );

  switch (menu) {
    case "1" /* Esta variável guarda o nome do paciente escolhido pelo usuário e, logo em seguida, mandamos a variável para o ARRAY através do método PUSH.*/:
      const novoPaciente = prompt("Qual seria o nome do paciente?");
      filaDeEspera.push(novoPaciente);
      break;
    case "2" /* Neste caso, não muda muito. Vamos usar essa variável para exibir o nome do paciente consultado. Usamos o método SHIFT para tirar o primeiro elemento do ARRAY e salvar na variável. Utilizando a estrutura do IF ELSE, fiz uma verificação para saber se existe algum paciente na fila. */:
      const pacienteConsultado = filaDeEspera.shift();
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila no momento!");
      } else {
        alert(pacienteConsultado + " foi removido da fila.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida! Escolha entre as opções disponíveis.");
      break;
  }
} while (menu !== "3");
