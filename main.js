// GRID VS. STACK MENU BUTTON

    const gridButton = document.querySelector('.grid');
    const items = document.querySelectorAll('.items');
        
    gridButton.addEventListener('click', () => {
        if (items[0].classList.contains('vinyl-grid')) {
            items.forEach(item => item.classList.remove('vinyl-grid'));
            gridButton.textContent = 'Grid';
        } else {
            items.forEach(item => item.classList.add('vinyl-grid'));
            gridButton.textContent = 'Stack';
        }
    });

// OPEN VINYL

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los elementos .vinyl
    const vinyls = document.querySelectorAll('.vinyl');

    // Seleccionamos todos los botones .close
    const closeButtons = document.querySelectorAll('.close');

    // Abre el disco cuando se hace clic en la sección
    vinyls.forEach(function(vinyl) {
        vinyl.addEventListener('click', function() {
            vinyl.classList.toggle('open');
        });
    });

    // Cierra el disco cuando se hace clic en el botón .close
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const vinyl = event.target.closest('.vinyl');
            vinyl.classList.remove('open');
        });
    });
});