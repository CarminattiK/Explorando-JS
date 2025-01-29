// Modularizando uma aplicação
/* Para este exercício, utilizei o código do projeto da calculadora criado por mim e proposto pela plataforma OneBitCode (OBC) em um projeto prático guiado. O desafio consiste em modularizar o código, separando o conteúdo do arquivo principal de JavaScript em pelo menos três módulos, utilizando a sintaxe dos ES Modules. */

const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const inputResult = document.getElementById("result");
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7" "6", "5", "4", "3", "2", "1", "0", ".", "%", " ", ];

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

function calculate() {
  inputResult.value = "ERROR";
  inputResult.classList.add("error");
  const result = eval(input.value);
  inputResult.value = result;
  inputResult.classList.remove("error");
}

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(inputResult.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

document.getElementById("themeChanger").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#ffa425");
    input.style.borderColor = "#000"; // Define a cor da borda do primeiro input como preta
    result.style.borderColor = "#000"; // Define a cor da borda do segundo input como preta
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#ffb347");
    input.style.borderColor = ""; // Reseta a cor da borda do primeiro input
    result.style.borderColor = ""; // Reseta a cor da borda do segundo input
    main.dataset.theme = "dark";
  }
});