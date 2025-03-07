// Modularizando uma aplicação
/* Para este exercício, utilizei o código do projeto da calculadora criado por mim e proposto pela plataforma OneBitCode (OBC) em um projeto prático guiado. O desafio consiste em modularizar o código, separando o conteúdo do arquivo principal de JavaScript em pelo menos três módulos, utilizando a sintaxe dos ES Modules. */

import calculate from "./calcular.js";
import copyToClipboard from "./Copia.js";
import { themeChanger } from "./Tema.js";
 
const input = document.getElementById("input");
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " ", ];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

document
  .getElementById("copyToClipboard").addEventListener("click", copyToClipboard);

document.getElementById("themeChanger").addEventListener("click", themeChanger);

// CONCLUSÃO: 
/* O código ficou bem mais limpo. Fiz conforme o enunciado de separar em três módulos e gostei bastante do resultado */