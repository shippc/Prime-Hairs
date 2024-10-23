/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show');
            // change icon
            toggle.classList.toggle('bx-x');
            // add padding to body
            bodypd.classList.toggle('body-user');
            // add padding to header
            headerpd.classList.toggle('body-user');
        });
    }
};

showNavbar('header-toggle-user', 'nav-bar', 'body-user', 'header-user');


/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav-link-user');

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));

// Map each section name to its corresponding content div
const sections = document.querySelectorAll('.content');

// Function to show a specific section and hide the others
function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const newContent = document.getElementById(sectionId);
    if (newContent) {
        newContent.classList.add('active');
    } else {
        console.error(`Seção ${sectionId} não encontrada.`);
    }
}

// Initialize by showing the Dashboard section by default
window.addEventListener('load', () => {
    showSection('dashboard');
});

// Attach event listeners to sidebar links
const links = document.querySelectorAll('.nav-link-user');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        showSection(sectionId);
    });
});

// JavaScript para remover o preloader após a página carregar
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';

    // Exibir o conteúdo principal após o preloader ser removido
    const content = document.querySelector('.content');
    content.style.display = 'block';
});