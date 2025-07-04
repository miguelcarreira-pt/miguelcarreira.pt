// JS referente à página index

document.addEventListener('DOMContentLoaded', () => {
  const carouselElement = document.querySelector('#carouselExampleIndicators');

  if (!carouselElement) return;

  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000,
    ride: 'carousel'
  });

  // ← → navegação com teclado
  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      carousel.next();
      restartCarouselInterval();
    } else if (event.key === 'ArrowLeft') {
      carousel.prev();
      restartCarouselInterval();
    }
  });

  // Clique nas imagens avança slide
  document.querySelectorAll('#carouselExampleIndicators .carousel-item img').forEach(img => {
    img.addEventListener('click', () => {
      carousel.next();
      restartCarouselInterval();
    });
  });

  // Reiniciar autoplay após interação
  function restartCarouselInterval() {
    carousel.cycle();
  }

  // Verifica se chegou à última imagem (não muito necessário com ciclo ativo)
  carouselElement.addEventListener('slid.bs.carousel', () => {
    const items = carouselElement.querySelectorAll('.carousel-item');
    const activeIndex = [...items].findIndex(item => item.classList.contains('active'));

    // Se estiver no último slide, volta ao início após 5s
    if (activeIndex === items.length - 1) {
      setTimeout(() => {
        carousel.to(0);
      }, 5000);
    }
  });
});


//CSS referente á pagina do contacto

// Referências aos elementos
    const telefone = document.getElementById("telefone");
    const opcoes = document.getElementById("opcoes");

    // Mostrar ou esconder as opções ao clicar no número
    telefone.addEventListener("click", function(event) {
      // Evitar que o clique no número faça o evento de "fechar" logo
      event.stopPropagation();
      if (opcoes.style.display === "block") {
        opcoes.style.display = "none"; // Esconde a caixa se já estiver visível
      } else {
        opcoes.style.display = "block"; // Exibe a caixa se estiver oculta
      }
    });

    // Fechar a caixa quando clicar fora do número ou da caixa de opções
    document.addEventListener("click", function(event) {
      if (!telefone.contains(event.target) && !opcoes.contains(event.target)) {
        opcoes.style.display = "none"; // Esconde a caixa se o clique for fora
      }
    });