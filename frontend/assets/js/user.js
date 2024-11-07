/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);

    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
            bodypd.classList.toggle('body-user');
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
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const newContent = document.getElementById(sectionId);
    if (newContent) {
        newContent.classList.add('active');
    } else {
        console.error(`Seção ${sectionId} não encontrada.`);
    }
}

// Show Dashboard by default on load
window.addEventListener('load', () => {
    showSection('dashboard');
});

// Event listeners for links
const links = document.querySelectorAll('.nav-link-user');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        const sectionId = link.getAttribute('data-section');
        if (sectionId) { // Only prevent default if data-section exists
            e.preventDefault();
            showSection(sectionId);
        }
    });
});

// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    const content = document.querySelector('.content');
    content.style.display = 'block';
});