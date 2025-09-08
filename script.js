// Aguarda o carregamento completo do DOM (Document Object Model) antes de executar o script.
document.addEventListener('DOMContentLoaded', function() {

    // ----------------------
    // LÓGICA DO CABEÇALHO
    // ----------------------
    const header = document.querySelector('.header');

    // Adiciona um listener para o evento de rolagem da janela.
    window.addEventListener('scroll', function() {
        // Verifica se a página foi rolada para baixo (mais de 50 pixels).
        if (window.scrollY > 50) {
            // Se sim, adiciona a classe 'scrolled' ao cabeçalho.
            header.classList.add('scrolled');
        } else {
            // Se não, remove a classe 'scrolled'.
            header.classList.remove('scrolled');
        }
    });

    // ----------------------
    // SLIDESHOW DO CABEÇALHO
    // ----------------------
    const slides = document.querySelectorAll('.slideshow .slide');
    let currentSlide = 0;

    // Função para mostrar o slide atual e esconder os outros.
    function showSlide() {
        // Remove a classe 'active' de todos os slides.
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Adiciona a classe 'active' ao slide atual, tornando-o visível.
        slides[currentSlide].classList.add('active');
    }

    // Função para avançar para o próximo slide.
    function nextSlide() {
        // Incrementa o índice do slide.
        currentSlide = (currentSlide + 1) % slides.length;
        // Chama a função para mostrar o novo slide.
        showSlide();
    }

    // Inicia o slideshow, mudando de slide a cada 5 segundos (5000 milissegundos).
    setInterval(nextSlide, 5000);
    // Mostra o primeiro slide ao carregar a página.
    showSlide();

    // ----------------------------------------------------
    // INÍCIO DAS MODIFICAÇÕES - SLIDESHOW DA SEÇÃO PRINCIPAL
    // ----------------------------------------------------

    const heroSlides = document.querySelectorAll('.hero-slideshow .hero-slide');
    let currentHeroIndex = 0;

    // Se houver slides na seção principal, inicia o slideshow.
    if (heroSlides.length > 0) {
        // Função para mostrar o slide ativo e esconder os outros.
        function showHeroSlide() {
            heroSlides.forEach(slide => {
                slide.classList.remove('hero-active');
            });
            heroSlides[currentHeroIndex].classList.add('hero-active');
        }

        // Função para avançar para o próximo slide.
        function nextHeroSlide() {
            currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
            showHeroSlide();
        }

        // Inicia o slideshow da seção principal.
        setInterval(nextHeroSlide, 4000);
        showHeroSlide();
    }
    // ----------------------------------------------------
    // FIM DAS MODIFICAÇÕES
    // ----------------------------------------------------

    // ----------------------
    // LÓGICA DO MODAL GENÉRICO (exposicao-modal)
    // ----------------------
    const modal = document.getElementById("exposicao-modal");
    const closeBtn = document.querySelector(".close");
    const exposicaoCards = document.querySelectorAll('.exposicao-card');

    // Adiciona um listener de clique a cada card de exposição.
    exposicaoCards.forEach(card => {
        card.addEventListener('click', function() {
            modal.style.display = "block";
        });
    });

    // Adiciona um listener de clique no botão de fechar.
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Fecha o modal se o usuário clicar fora dele.
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

});

// ----------------------
// MODAL: Língua Viva
// ----------------------

// Função para abrir o modal da exposição "Língua Viva"
function abrirModal() {
    const modal = document.getElementById("modal");
    const iframeContainer = modal.querySelector(".modal-content");
    if (modal && iframeContainer) {
        modal.style.display = "block";
        // Insere o iframe com autoplay ativado
        iframeContainer.innerHTML = `
            <span class="close" onclick="fecharModal()">&times;</span>
            <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/rmQRAichVWw?autoplay=1&mute=1"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>
        `;
    }
}

// Função para fechar o modal da exposição "Língua Viva"
function fecharModal() {
    const modal = document.getElementById("modal");
    const iframeContainer = modal.querySelector(".modal-content");
    if (modal && iframeContainer) {
        modal.style.display = "none";
        iframeContainer.innerHTML = `
            <span class="close" onclick="fecharModal()">&times;</span>
        `;
    }
}

// ----------------------
// MODAL: Escritores Brasileiros
// ----------------------

// Função para abrir o modal da exposição "Escritores Brasileiros"
function abrirModalEscritores() {
    const modal = document.getElementById("modal-escritores");
    const iframeContainer = modal.querySelector(".modal-content");
    if (modal && iframeContainer) {
        modal.style.display = "block";
        // Insere o iframe com autoplay ativado
        iframeContainer.innerHTML = `
            <span class="close" onclick="fecharModalEscritores()">&times;</span>
            <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/C91ud0TuAiU?autoplay=1&mute=1"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>
        `;
    }
}

// Função para fechar o modal da exposição "Escritores Brasileiros"
function fecharModalEscritores() {
    const modal = document.getElementById("modal-escritores");
    const iframeContainer = modal.querySelector(".modal-content");
    if (modal && iframeContainer) {
        modal.style.display = "none";
        iframeContainer.innerHTML = `
            <span class="close" onclick="fecharModalEscritores()">&times;</span>
        `;
    }
}

// ----------------------
// Fecha os modais ao clicar fora da área de conteúdo
// ----------------------
window.addEventListener('click', function(event) {
    const modal = document.getElementById("modal");
    const modalEscritores = document.getElementById("modal-escritores");

    if (event.target === modal) {
        fecharModal();
    }

    if (event.target === modalEscritores) {
        fecharModalEscritores();
    }
});

function abrirGaleria() {
    const popup = document.getElementById("galeria-popup");
    if (popup) popup.style.display = "flex";
}

function fecharGaleria() {
    const popup = document.getElementById("galeria-popup");
    if (popup) popup.style.display = "none";
}

function abrirInfo(local) {
    let info = "";

    if (local === "museu") {
        info = `
            <h1>Museu da Língua Portuguesa</h1>
            <p><strong>Endereço:</strong> Praça da Luz, s/nº – Centro Histórico de São Paulo, SP, 01120-010</p>
            <p><strong>Site oficial:</strong> <a href="https://www.museudalinguaportuguesa.org.br/" target="_blank">museudalinguaportuguesa.org.br</a></p>
            <p><strong>Horário de funcionamento:</strong> Geralmente de terça a domingo, das 9h às 16h30 (entrada até 16h). Recomendo confirmar no site, pois pode variar em feriados ou eventos especiais.</p>
        `;
    }

    if (local === "pina") {
        info = `
            <h1>Pinacoteca de São Paulo</h1>
            <p><strong>Endereço:</strong> Praça da Luz, 2 – Luz, São Paulo, SP, 01120-010</p>
            <p><strong>Site oficial:</strong> <a href="https://www.pinacoteca.org.br/" target="_blank">pinacoteca.org.br</a></p>
            <p><strong>Horário de funcionamento:</strong> Normalmente de quarta a segunda, das 10h às 18h (fechada às terças)</p>
        `;
    }

    document.getElementById("info-detalhes").innerHTML = info;
    document.getElementById("info-popup").style.display = "flex";
}

function fecharInfo() {
    document.getElementById("info-popup").style.display = "none";
}






