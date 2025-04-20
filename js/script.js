const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-list a');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});


// ======== FILTROS DE CARDÁPIO ========

// Seleciona os botões de filtro e os itens do cardápio
const botoesFiltro = document.querySelectorAll('.filtro');
const itensCardapio = document.querySelectorAll('.item');

// Adiciona evento de clique para cada botão
botoesFiltro.forEach(botao => {
  botao.addEventListener('click', () => {
    // Remove classe ativa de todos os botões
    botoesFiltro.forEach(b => b.classList.remove('ativo'));

    // Adiciona a classe ativa no botão clicado
    botao.classList.add('ativo');

    // Pega a categoria selecionada
    const categoriaSelecionada = botao.getAttribute('data-categoria');

    // Mostra/esconde os itens conforme a categoria
    itensCardapio.forEach(item => {
      if (item.classList.contains(categoriaSelecionada)) {
        item.classList.add('ativo');
      } else {
        item.classList.remove('ativo');
      }
    });
  });
});

  
// Seleção de elementos
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const images = document.querySelectorAll('.galeria-item img');

// Função para abrir a imagem ampliada
images.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImg.src = image.src;  // Atribui o src da imagem clicada ao lightbox
    lightbox.classList.add('active');  // Exibe o lightbox
  });
});

// Função para fechar o lightbox
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');  // Fecha o lightbox ao clicar fora da imagem
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.querySelector(".galeria");
    if (galeria) {
      galeria.classList.add("reveal");
    }
  });


  const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentSlide = 0;

function updateSlider() {
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slider.children.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
  updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
setInterval(nextSlide, 5000); // troca automática

const form = document.getElementById("form-avaliacao");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const comentario = document.getElementById("comentario").value;
  const foto = document.getElementById("foto").files[0];
  const fotoURL = foto ? URL.createObjectURL(foto) : "img/perfil-default.jpg";

  const novoSlide = document.createElement("div");
  novoSlide.classList.add("avaliacao");

  novoSlide.innerHTML = `
    <img src="${fotoURL}" class="avatar" />
    <p class="comentario">"${comentario}"</p>
    <p class="nome">${nome}</p>
  `;

  slider.appendChild(novoSlide);
  form.reset();
});



  const whatsappBtn = document.querySelector('.whatsapp-button');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      whatsappBtn.classList.add('show');
    } else {
      whatsappBtn.classList.remove('show');
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-reveal');
  
    const revealOnScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Chamada inicial
  });
  