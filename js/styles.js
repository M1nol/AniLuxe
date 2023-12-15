function toggleTheme() {
    const body = document.getElementById('mainBody');
    body.classList.toggle('dark-theme');

    const logoImage = document.getElementById('logoImage');
    const isDarkTheme = body.classList.contains('dark-theme');
    logoImage.src = isDarkTheme ? 'img/light-logo.png' : 'img/logo.png' ;
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}


function scrollLeft(containerId) {
    const container = document.getElementById(containerId);
    container.scrollLeft -= 150; // Регулюйте значення для швидкості прокрутки
}

function scrollRight(containerId) {
    const container = document.getElementById(containerId);
    container.scrollLeft += 150; // Регулюйте значення для швидкості прокрутки
}

// Визначення, коли кнопки мають вспливати
document.addEventListener('DOMContentLoaded', function () {
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        container.addEventListener('mouseenter', () => showButtons(container));
        container.addEventListener('mouseleave', () => hideButtons(container));
    });
});

function showButtons(container) {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.opacity = '1';
    });
}

function hideButtons(container) {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.opacity = '0';
    });
}
