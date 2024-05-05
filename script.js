function toggleMenu() {
    var navbar = document.querySelector('.navbar ul');
    var toggleBarIcon = document.querySelector('.fa-bars');
    var toggleCloseIcon = document.querySelector('.fa-xmark');

    navbar.classList.toggle('active');

    // Toggle between bar icon and close icon
    toggleBarIcon.style.display = navbar.classList.contains('active') ? 'none' : 'block';
    toggleCloseIcon.style.display = navbar.classList.contains('active') ? 'block' : 'none';
}