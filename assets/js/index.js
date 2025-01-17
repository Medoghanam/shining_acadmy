document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.acadmy_float_logo');
    logo.addEventListener('click', function() {
        logo.classList.add('clicked');
    });
});