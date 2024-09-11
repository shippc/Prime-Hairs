// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /*==================== MENU TOGGLE ====================*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    const toggleMenu = (action) => {
        navMenu.classList[action]('show-menu');
    };

    navToggle.addEventListener('click', () => toggleMenu('add'));
    navClose.addEventListener('click', () => toggleMenu('remove'));

    /*==================== LOGIN TOGGLE ====================*/
    const login = document.getElementById('login');
    const loginBtn = document.getElementById('login-btn');
    const loginClose = document.getElementById('login-close');

    const toggleLogin = (action) => {
        login.classList[action]('show-login');
    };

    loginBtn.addEventListener('click', () => toggleLogin('add'));
    loginClose.addEventListener('click', () => toggleLogin('remove'));

    /*==================== SEARCH TOGGLE ====================*/
    // Uncomment and update if search functionality is needed
    /*
    const search = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');
    const searchClose = document.getElementById('search-close');

    searchBtn.addEventListener('click', () => search.classList.add('show-search'));
    searchClose.addEventListener('click', () => search.classList.remove('show-search'));
    */

});

/*==================== SWIPER SERVICES ====================*/
document.addEventListener('DOMContentLoaded', () => {
    new Swiper(".services-container", {
        // Configuração do efeito de transição
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0, // Define o ângulo de rotação dos slides
            stretch: 0, // Ajusta a largura dos slides (padrão: 0)
            depth: 100, // Profundidade da transição (padrão: 100)
            modifier: 1, // Modificador para a intensidade do efeito (padrão: 1)
        },

        // Configurações gerais do Swiper
        grabCursor: true, // Altera o cursor para um "mão" quando estiver sobre o swiper
        centeredSlides: true, // Centraliza o slide ativo
        slidesPerView: "auto", // Define a quantidade de slides visíveis (automático baseado no conteúdo)
        loop: true, // Habilita o loop infinito dos slides
        spaceBetween: 32, // Espaçamento entre os slides

        // Configurações adicionais (opcionais)
        pagination: {
            el: '.swiper-pagination', // Se houver, adicione um elemento para a paginação
            clickable: true, // Permite clicar na paginação para navegar
        },
        navigation: {
            nextEl: '.swiper-button-next', // Botão para o próximo slide
            prevEl: '.swiper-button-prev', // Botão para o slide anterior
        },
    });
});


/*==================== EMAIL JS ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');

    // Verifica se os elementos existem antes de adicionar o ouvinte de evento
    if (contactForm && contactMessage) {
        const serviceID = 'service_jovs1ae';
        const templateID = 'template_ngtimpg';
        const userID = 'dGNXLaxyY9AODOLkj';

        const sendEmail = async (e) => {
            e.preventDefault();
            contactMessage.textContent = 'Sending...'; // Feedback enquanto envia

            try {
                await emailjs.sendForm(serviceID, templateID, contactForm, userID);
                contactMessage.textContent = 'Message sent successfully';
            } catch (error) {
                console.error('EmailJS error:', error);
                contactMessage.textContent = 'Message not sent (service error)';
            } finally {
                setTimeout(() => contactMessage.textContent = '', 5000);
                contactForm.reset();
            }
        };

        contactForm.addEventListener('submit', sendEmail);
    }
});



/*==================== SCROLL UP ====================*/
const scrollUpButton = document.getElementById('scroll-up');
const scrollThreshold = 200; // Ponto de rolagem para mostrar o botão

const handleScrollUp = () => {
    // Verifica se a rolagem da janela atingiu o ponto de threshold
    if (window.scrollY >= scrollThreshold) {
        scrollUpButton.classList.add('show-scroll');
    } else {
        scrollUpButton.classList.remove('show-scroll');
    }
};

// Adiciona um ouvinte de evento para rolar a página
window.addEventListener('scroll', handleScrollUp);

// Executa a função uma vez para definir o estado inicial do botão
handleScrollUp();


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const handleScrollActive = () => {
    const scrollY = window.scrollY + 50; // Ajusta o ponto de ativação para o meio da tela

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

        // Verifica se o scroll está dentro da área da seção
        const isActive = scrollY > sectionTop && scrollY <= sectionTop + sectionHeight;

        // Adiciona ou remove a classe de link ativo
        if (link) {
            link.classList.toggle('active-link', isActive);
        }
    });
};

// Adiciona o evento de rolagem
window.addEventListener('scroll', handleScrollActive);

// Executa a função uma vez para definir o estado inicial dos links
handleScrollActive();

/*==================== DARK LIGHT THEME ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const darkThemeClass = 'dark-theme';
    const iconThemeClass = 'ri-sun-line';
    
    // Funções para obter o tema e ícone atuais
    const getCurrentTheme = () => document.body.classList.contains(darkThemeClass) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconThemeClass) ? 'ri-moon-line' : 'ri-sun-line';
    
    // Função para aplicar o tema e ícone com base nas preferências armazenadas
    const applyStoredPreferences = () => {
        const storedTheme = localStorage.getItem('selected-theme');
        const storedIcon = localStorage.getItem('selected-icon');
    
        if (storedTheme) {
            document.body.classList.toggle(darkThemeClass, storedTheme === 'dark');
            themeButton.classList.toggle(iconThemeClass, storedIcon === 'ri-moon-line');
        }
    };
    
    // Função para alternar o tema ao clicar no botão
    const toggleTheme = () => {
        document.body.classList.toggle(darkThemeClass);
        themeButton.classList.toggle(iconThemeClass);
        
        // Armazenar as preferências do usuário
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    };
    
    // Aplicar preferências armazenadas ao carregar a página
    applyStoredPreferences();
    
    // Adicionar o ouvinte de evento ao botão
    themeButton.addEventListener('click', toggleTheme);
});


/*===== LOGIN SHOW AND HIDDEN ====*/
document.addEventListener('DOMContentLoaded', () => {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const loginIn = document.getElementById('login-in');
    const loginUp = document.getElementById('login-up');

    if (signUp && signIn && loginIn && loginUp) {
        const toggleLoginView = (showSignUp) => {
            // Remove and add classes based on the showSignUp flag
            if (showSignUp) {
                loginIn.classList.add('none');
                loginIn.classList.remove('block');
                loginUp.classList.add('block');
                loginUp.classList.remove('none');
            } else {
                loginIn.classList.add('block');
                loginIn.classList.remove('none');
                loginUp.classList.add('none');
                loginUp.classList.remove('block');
            }
        };

        signUp.addEventListener('click', () => toggleLoginView(true));
        signIn.addEventListener('click', () => toggleLoginView(false));
    }
});


