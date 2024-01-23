document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menu = document.querySelector('nav ul');

    hamburgerIcon.addEventListener('click', function () {
        menu.classList.toggle('show-menu');
    });
});
