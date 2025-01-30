export default function calculate() {
    const inputResult = document.querySelector("#result")
    inputResult.value = "ERROR";
    inputResult.classList.add("error");
    const result = eval(input.value);
    inputResult.value = result;
    inputResult.classList.remove("error");
  }