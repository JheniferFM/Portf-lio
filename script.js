// Seleção do botão para troca de tema
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeButton.textContent = document.body.classList.contains("dark-theme")
    ? "Modo Claro"
    : "Modo Escuro";
  // Salvar a preferência do usuário no localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }8
});

// Verificar o tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeButton.textContent = "Modo Claro";
  } else {
    document.body.classList.remove('dark-theme');
    themeButton.textContent = "Modo Escuro";
  }
});
