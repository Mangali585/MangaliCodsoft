const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

const logo = document.getElementById('logo');
const socialLinks = document.getElementById('socialLinks');

logo.onclick = () => {
    socialLinks.style.display = (socialLinks.style.display === 'block') ? 'none' : 'block';
};

document.addEventListener('click', (event) => {
    if (!logo.contains(event.target) && !socialLinks.contains(event.target)) {
        socialLinks.style.display = 'none';
    }
});
