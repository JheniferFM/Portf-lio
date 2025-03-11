// 1. Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 2. Animações ao rolar a página (seções que se tornam visíveis ao entrar na tela)
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// 3. Alternar modo escuro/claro com animação suave
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Modo Escuro';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.zIndex = '1000';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#ff3399'; // Tom de rosa mais marcante
toggleButton.style.color = 'white';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.transition = 'background-color 0.3s ease';
document.body.appendChild(toggleButton);

// 3.1. Verificar preferências de tema no localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Modo Claro';
    toggleButton.style.backgroundColor = '#ff8c00'; // Cor para o modo escuro
  }
});

// 3.2. Alternar tema
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Salvar a preferência do usuário no localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = 'Modo Claro';
    toggleButton.style.backgroundColor = '#ff8c00'; // Cor para o modo escuro
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = 'Modo Escuro';
    toggleButton.style.backgroundColor = '#ff3399'; // Cor para o modo claro
  }
});
