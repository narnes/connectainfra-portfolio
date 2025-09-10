// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }
            
            // Simular envio do formulário
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
    }
});

// Animação de entrada para os serviços
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos itens de serviço
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Destacar link ativo na navegação
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});


// Carrossel de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (slides[index]) {
        slides[index].classList.add('active');
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Iniciar carrossel automático quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlide(0); // Mostrar primeiro slide
        setInterval(nextSlide, 4000); // Trocar slide a cada 4 segundos
    }
});


// Detalhes dos serviços
const serviceDetails = {
    infraestrutura: {
        title: "Infraestrutura de Redes",
        content: `
            <h3>Infraestrutura de Redes</h3>
            <p>Oferecemos soluções completas para design, implementação e gerenciamento de redes corporativas, garantindo alta performance e segurança.</p>
            <h4>Nossos Serviços Incluem:</h4>
            <ul>
                <li>Design e planejamento de redes corporativas</li>
                <li>Implementação de switches e roteadores</li>
                <li>Configuração de VLANs e segmentação de rede</li>
                <li>Monitoramento e gerenciamento de performance</li>
                <li>Cabeamento estruturado e fibra óptica</li>
                <li>Redes wireless empresariais</li>
            </ul>
            <p>Nossa equipe especializada garante que sua infraestrutura de rede seja robusta, escalável e preparada para o futuro.</p>
        `
    },
    firewall: {
        title: "Firewall",
        content: `
            <h3>Firewall</h3>
            <p>Proteja sua rede contra ameaças cibernéticas com nossas soluções avançadas de firewall, especializadas em tecnologias líderes de mercado.</p>
            <h4>Especialidades:</h4>
            <ul>
                <li><strong>Sophos Firewall:</strong> Proteção avançada com tecnologia de deep learning</li>
                <li><strong>Fortigate:</strong> Soluções de segurança de alta performance</li>
                <li>Configuração e otimização de regras de segurança</li>
                <li>Monitoramento 24/7 de ameaças</li>
                <li>Implementação de políticas de acesso</li>
                <li>Análise de logs e relatórios de segurança</li>
            </ul>
            <p>Mantemos sua empresa protegida contra as mais recentes ameaças cibernéticas com tecnologia de ponta.</p>
        `
    },
    cloud: {
        title: "Cloud Computing",
        content: `
            <h3>Cloud Computing</h3>
            <p>Aproveite o poder da nuvem com nossas soluções baseadas no Microsoft Azure, oferecendo escalabilidade, segurança e eficiência.</p>
            <h4>Serviços em Nuvem:</h4>
            <ul>
                <li>Migração para Microsoft Azure</li>
                <li>Implementação de infraestrutura como serviço (IaaS)</li>
                <li>Plataforma como serviço (PaaS)</li>
                <li>Backup e disaster recovery na nuvem</li>
                <li>Otimização de custos em nuvem</li>
                <li>Monitoramento e gerenciamento contínuo</li>
            </ul>
            <p>Transforme sua infraestrutura com a flexibilidade e economia da computação em nuvem.</p>
        `
    },
    ciberseguranca: {
        title: "Cibersegurança",
        content: `
            <h3>Cibersegurança</h3>
            <p>Visibilidade total sobre a segurança da sua empresa com soluções avançadas de proteção contra ameaças digitais.</p>
            <h4>Soluções de Segurança:</h4>
            <ul>
                <li>Análise de vulnerabilidades e penetration testing</li>
                <li>Implementação de SOC (Security Operations Center)</li>
                <li>Monitoramento de ameaças em tempo real</li>
                <li>Treinamento em conscientização de segurança</li>
                <li>Políticas de segurança da informação</li>
                <li>Compliance e adequação a normas (LGPD, ISO 27001)</li>
            </ul>
            <p>Proteja seus dados e sistemas com nossa abordagem abrangente de cibersegurança.</p>
        `
    },
    backup: {
        title: "Backup Intelligence",
        content: `
            <h3>Backup Intelligence</h3>
            <p>Garanta a proteção dos seus dados com nossa solução de backup inteligente e confiável, especializada em tecnologia Veeam.</p>
            <h4>Tecnologias e Serviços:</h4>
            <ul>
                <li><strong>Veeam Backup & Replication:</strong> Solução líder em backup e recuperação</li>
                <li>Backup automatizado e programado</li>
                <li>Recuperação rápida de dados (RTO/RPO otimizados)</li>
                <li>Backup para nuvem híbrida</li>
                <li>Monitoramento e alertas proativos</li>
                <li>Testes regulares de recuperação</li>
            </ul>
            <p>Seus dados críticos sempre protegidos com a mais avançada tecnologia de backup do mercado.</p>
        `
    },
    consultoria: {
        title: "Consultoria em TI",
        content: `
            <h3>Consultoria em TI</h3>
            <p>Orientação estratégica para otimizar seus investimentos em tecnologia e impulsionar o crescimento do seu negócio.</p>
            <h4>Serviços de Consultoria:</h4>
            <ul>
                <li>Planejamento estratégico de TI</li>
                <li>Análise de infraestrutura atual</li>
                <li>Roadmap de modernização tecnológica</li>
                <li>Otimização de custos operacionais</li>
                <li>Governança de TI</li>
                <li>Gestão de projetos tecnológicos</li>
            </ul>
            <p>Transforme a tecnologia em vantagem competitiva com nossa consultoria especializada.</p>
        `
    },
    suporte: {
        title: "Suporte Técnico",
        content: `
            <h3>Suporte Técnico</h3>
            <p>Suporte especializado para garantir o funcionamento contínuo dos seus sistemas com atendimento ágil e eficiente.</p>
            <h4>Modalidades de Suporte:</h4>
            <ul>
                <li>Suporte remoto 24/7</li>
                <li>Atendimento on-site quando necessário</li>
                <li>Manutenção preventiva e corretiva</li>
                <li>Monitoramento proativo de sistemas</li>
                <li>Help desk especializado</li>
                <li>SLA personalizado conforme necessidade</li>
            </ul>
            <p>Mantenha sua operação funcionando sem interrupções com nosso suporte técnico especializado.</p>
        `
    }
};

// Função para mostrar detalhes do serviço
function showServiceDetails(serviceType) {
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');
    
    if (serviceDetails[serviceType]) {
        modalBody.innerHTML = serviceDetails[serviceType].content;
        modal.style.display = 'block';
    }
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
}

// Fechar modal clicando fora dele
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}



function changeLanguage() {
    const selectElement = document.getElementById("languageSelect");
    const selectedLanguage = selectElement.value;

    if (selectedLanguage === "es") {
        window.location.href = "index_es.html"; // Redireciona para a versão em espanhol
    } else {
        window.location.href = "index.html"; // Redireciona para a versão em português
    }
}

// Define o idioma selecionado no carregamento da página
window.onload = function() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf("/") + 1);

    const selectElement = document.getElementById("languageSelect");
    if (filename === "index_es.html") {
        selectElement.value = "es";
    } else {
        selectElement.value = "pt";
    }
};

