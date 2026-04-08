// Array de projetos (adicionar/remover)
const projetos = [
    {
        titulo: "Portfólio Pessoal",
        descricao: "Desenvolvimento de um portfólio responsivo com HTML, CSS e JavaScript.",
        techs: ["HTML", "CSS", "JavaScript"],
        demo: "https://arthurdeaguiarr.github.io/Portf-lio/index.html",
        github: "https://github.com/Arthurdeaguiarr/Portf-lio"
    }
];

// 1. Carrega projetos dinamicamente (protege contra edição)
function carregarProjetos() {
    const container = document.getElementById('projetosContainer');
    if (!container) return;

    container.innerHTML = projetos.map(projeto => `
        <div class="card-projeto">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <div class="techs">
                ${projeto.techs.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="links">
                <a href="${projeto.demo}" target="_blank">Ver Demo</a>
                <a href="${projeto.github}" target="_blank">GitHub</a>
            </div>
        </div>
    `).join('');
}

// 2. Formulário de contato funcional
function initFormularioContato() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Feedback visual profissional
        const botao = form.querySelector('button[type="submit"]');
        const textoOriginal = botao.textContent;
        
        botao.textContent = 'Enviando...';
        botao.disabled = true;

        // Simula envio (2 segundos)
        setTimeout(() => {
            alert(`✅ Obrigado, ${nome}!\n\nRecebi sua mensagem e entrarei em contato em breve.\n\nEmail: ${email}`);
            form.reset();
            botao.textContent = textoOriginal;
            botao.disabled = false;
        }, 2000);

        // Log para debug (você pode ver no console do navegador)
        console.log('📧 Nova mensagem recebida:', { nome, email, mensagem });
    });
}

// 3. Animações de entrada dos cards
function initAnimacoes() {
    function animateOnScroll() {
        const cards = document.querySelectorAll('.card, .card-projeto');
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardVisible = 200;
            
            if (cardTop < window.innerHeight - cardVisible && !card.classList.contains('animate')) {
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.add('animate');
            }
        });
    }

    // Executa na carga e no scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
}

// 4. Efeito de digitação no título principal (index.html)
function initEfeitoDigitacao() {
    const titulos = document.querySelectorAll('.simbolo-dev');
    titulos.forEach(titulo => {
        const textoOriginal = titulo.textContent;
        let i = 0;
        
        function digitar() {
            if (i < textoOriginal.length) {
                titulo.textContent = textoOriginal.substring(0, i + 1) + '|';
                i++;
                setTimeout(digitar, 100);
            } else {
                titulo.textContent = textoOriginal;
            }
        }
        
        titulo.style.opacity = '0';
        setTimeout(() => {
            titulo.style.opacity = '1';
            digitar();
        }, 500);
    });
}

// Inicialização principal
document.addEventListener('DOMContentLoaded', function() {
    carregarProjetos();
    initFormularioContato();
    initAnimacoes();
    
    // Efeito de digitação só na página inicial
    if (document.querySelector('.simbolo-dev')) {
        initEfeitoDigitacao();
    }
});

console.log()
