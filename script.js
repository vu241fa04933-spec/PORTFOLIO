// 1. Generate Deep Starfield Dynamically
const starfield = document.getElementById('starfield');
for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2.5}px`;
    star.style.height = star.style.width;
    star.style.setProperty('--duration', `${2 + Math.random() * 5}s`);
    starfield.appendChild(star);
}

// 2. Page Navigation Handler
function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. Secure Phone Reveal Function
function revealPhone() {
    const container = document.getElementById('phone-container');
    const btn = document.getElementById('reveal-btn');
    container.innerHTML = '<span style="color: var(--accent); font-weight: 600;">7893054933</span>';
    btn.style.display = 'none';
}