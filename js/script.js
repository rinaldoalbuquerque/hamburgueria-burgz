document.addEventListener("DOMContentLoaded", function () {
  // ======== MENU RESPONSIVO ========
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-list a');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

  // ======== FILTROS DE CARDÁPIO ========
  const botoesFiltro = document.querySelectorAll('.filtro');
  const itensCardapio = document.querySelectorAll('.item');

  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
      botoesFiltro.forEach(b => b.classList.remove('ativo'));
      botao.classList.add('ativo');

      const categoriaSelecionada = botao.getAttribute('data-categoria');

      itensCardapio.forEach(item => {
        if (item.classList.contains(categoriaSelecionada)) {
          item.classList.add('ativo');
        } else {
          item.classList.remove('ativo');
        }
      });
    });
  });

  // ======== GALERIA LIGHTBOX ========
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const images = document.querySelectorAll('.galeria-item img');

  images.forEach(image => {
    image.addEventListener('click', () => {
      lightboxImg.src = image.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  const galeria = document.querySelector(".galeria");
  if (galeria) {
    galeria.classList.add("reveal");
  }

  // ======== SLIDER DE AVALIAÇÕES ========
  const slider = document.querySelector(".slider");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentSlide = 0;

  function updateSlider() {
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

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  setInterval(nextSlide, 5000); // troca automática

  // ======== FORMULÁRIO DE AVALIAÇÃO ========
  const form = document.getElementById("form-avaliacao");

  if (form) {
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
  }

  // ======== BOTÃO WHATSAPP FLUTUANTE ========
  const whatsappBtn = document.querySelector('.whatsapp-button');

  if (whatsappBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        whatsappBtn.classList.add('show');
      } else {
        whatsappBtn.classList.remove('show');
      }
    });
  }

  // ======== ANIMAÇÃO SCROLL REVEAL ========
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
  revealOnScroll();
});
