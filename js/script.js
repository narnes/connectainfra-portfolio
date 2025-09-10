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
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contactForm');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Obter os valores do formulário
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validação básica
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

            // Construir o objeto de dados
            const formData = {
                name: name,
                email: email,
                message: message
            };

            try {
                // Enviar os dados para o endpoint do Formspree
                const response = await fetch('https://formspree.io/f/mgvlzllp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
                    form.reset(); // Limpar o formulário após o envio
                } else {
                    alert('Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
                }
            } catch (error) {
                console.error('Erro ao enviar formulário:', error);
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
            }
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


// Detalhes dos serviços em português
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

// Detalhes dos serviços em espanhol
const serviceDetailsES = {
    infraestrutura: {
        title: "Infraestructura de Redes",
        content: `
            <h3>Infraestructura de Redes</h3>
            <p>Ofrecemos soluciones completas para diseño, implementación y gestión de redes corporativas, garantizando alto rendimiento y seguridad.</p>
            <h4>Nuestros Servicios Incluyen:</h4>
            <ul>
                <li>Diseño y planificación de redes corporativas</li>
                <li>Implementación de switches y routers</li>
                <li>Configuración de VLANs y segmentación de red</li>
                <li>Monitoreo y gestión de rendimiento</li>
                <li>Cableado estructurado y fibra óptica</li>
                <li>Redes inalámbricas empresariales</li>
            </ul>
            <p>Nuestro equipo especializado garantiza que su infraestructura de red sea robusta, escalable y preparada para el futuro.</p>
        `
    },
    firewall: {
        title: "Firewall",
        content: `
            <h3>Firewall</h3>
            <p>Proteja su red contra amenazas cibernéticas con nuestras soluciones avanzadas de firewall, especializadas en tecnologías líderes del mercado.</p>
            <h4>Especialidades:</h4>
            <ul>
                <li><strong>Sophos Firewall:</strong> Protección avanzada con tecnología de deep learning</li>
                <li><strong>Fortigate:</strong> Soluciones de seguridad de alto rendimiento</li>
                <li>Configuración y optimización de reglas de seguridad</li>
                <li>Monitoreo 24/7 de amenazas</li>
                <li>Implementación de políticas de acceso</li>
                <li>Análisis de logs e informes de seguridad</li>
            </ul>
            <p>Mantenemos su empresa protegida contra las más recientes amenazas cibernéticas con tecnología de punta.</p>
        `
    },
    cloud: {
        title: "Cloud Computing",
        content: `
            <h3>Cloud Computing</h3>
            <p>Aproveche el poder de la nube con nuestras soluciones basadas en Microsoft Azure, ofreciendo escalabilidad, seguridad y eficiencia.</p>
            <h4>Servicios en la Nube:</h4>
            <ul>
                <li>Migración a Microsoft Azure</li>
                <li>Implementación de infraestructura como servicio (IaaS)</li>
                <li>Plataforma como servicio (PaaS)</li>
                <li>Backup y disaster recovery en la nube</li>
                <li>Optimización de costos en la nube</li>
                <li>Monitoreo y gestión continua</li>
            </ul>
            <p>Transforme su infraestructura con la flexibilidad y economía de la computación en la nube.</p>
        `
    },
    ciberseguranca: {
        title: "Ciberseguridad",
        content: `
            <h3>Ciberseguridad</h3>
            <p>Visibilidad total sobre la seguridad de su empresa con soluciones avanzadas de protección contra amenazas digitales.</p>
            <h4>Soluciones de Seguridad:</h4>
            <ul>
                <li>Análisis de vulnerabilidades y penetration testing</li>
                <li>Implementación de SOC (Security Operations Center)</li>
                <li>Monitoreo de amenazas en tiempo real</li>
                <li>Entrenamiento en concientización de seguridad</li>
                <li>Políticas de seguridad de la información</li>
                <li>Compliance y adecuación a normas (LGPD, ISO 27001)</li>
            </ul>
            <p>Proteja sus datos y sistemas con nuestro enfoque integral de ciberseguridad.</p>
        `
    },
    backup: {
        title: "Backup Intelligence",
        content: `
            <h3>Backup Intelligence</h3>
            <p>Garantice la protección de sus datos con nuestra solución de backup inteligente y confiable, especializada en tecnología Veeam.</p>
            <h4>Tecnologías y Servicios:</h4>
            <ul>
                <li><strong>Veeam Backup & Replication:</strong> Solución líder en backup y recuperación</li>
                <li>Backup automatizado y programado</li>
                <li>Recuperación rápida de datos (RTO/RPO optimizados)</li>
                <li>Backup para nube híbrida</li>
                <li>Monitoreo y alertas proactivas</li>
                <li>Pruebas regulares de recuperación</li>
            </ul>
            <p>Sus datos críticos siempre protegidos con la más avanzada tecnología de backup del mercado.</p>
        `
    },
    consultoria: {
        title: "Consultoría en TI",
        content: `
            <h3>Consultoría en TI</h3>
            <p>Orientación estratégica para optimizar sus inversiones en tecnología e impulsar el crecimiento de su negocio.</p>
            <h4>Servicios de Consultoría:</h4>
            <ul>
                <li>Planificación estratégica de TI</li>
                <li>Análisis de infraestructura actual</li>
                <li>Roadmap de modernización tecnológica</li>
                <li>Optimización de costos operacionales</li>
                <li>Gobernanza de TI</li>
                <li>Gestión de proyectos tecnológicos</li>
            </ul>
            <p>Transforme la tecnología en ventaja competitiva con nuestra consultoría especializada.</p>
        `
    },
    suporte: {
        title: "Soporte Técnico",
        content: `
            <h3>Soporte Técnico</h3>
            <p>Soporte especializado para garantizar el funcionamiento continuo de sus sistemas con atención ágil y eficiente.</p>
            <h4>Modalidades de Soporte:</h4>
            <ul>
                <li>Soporte remoto 24/7</li>
                <li>Atención on-site cuando sea necesario</li>
                <li>Mantenimiento preventivo y correctivo</li>
                <li>Monitoreo proactivo de sistemas</li>
                <li>Help desk especializado</li>
                <li>SLA personalizado según necesidad</li>
            </ul>
            <p>Mantenga su operación funcionando sin interrupciones con nuestro soporte técnico especializado.</p>
        `
    }
};

// Função para mostrar detalhes do serviço
function showServiceDetails(serviceType) {
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');
    
    // Detectar idioma da página
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf("/") + 1);
    const isSpanish = filename === "index_es.html";
    
    // Usar o objeto correto baseado no idioma
    const details = isSpanish ? serviceDetailsES : serviceDetails;
    
    if (details[serviceType]) {
        modalBody.innerHTML = details[serviceType].content;
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

    // Redireciona para o arquivo correto com base no idioma selecionado
    if (selectedLanguage === "es") {
        window.location.href = "index_es.html"; // Redireciona para a versão em espanhol
    } else if (selectedLanguage === "en") {
        window.location.href = "index_en.html"; // Redireciona para a versão em inglês
    } else {
        window.location.href = "index.html"; // Redireciona para a versão em português
    }
}

// Define o idioma selecionado no carregamento da página
window.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf("/") + 1);

    const selectElement = document.getElementById("languageSelect");

    // Define o valor do seletor com base no arquivo atual
    if (filename === "index_es.html") {
        selectElement.value = "es";
    } else if (filename === "index_en.html") {
        selectElement.value = "en";
    } else {
        selectElement.value = "pt";
    }
});

