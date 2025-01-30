export function themeChanger() {
    const main = document.querySelector("main");
    const root = document.querySelector(":root");

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
  }