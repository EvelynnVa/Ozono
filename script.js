const aplicacionesCard = document.querySelectorAll('.aplicacion');

aplicacionesCard.forEach(function(card) {
    card.addEventListener('click', function() {
        
        // Si ya está activa, la desactiva
        if (card.classList.contains('activa')) {
            card.classList.remove('activa');
            aplicacionesCard.forEach(function(c) {
                c.classList.remove('inactiva');
            });
            return;
        }
        
        // Activa la seleccionada e inactiva las demás
        aplicacionesCard.forEach(function(c) {
            c.classList.remove('activa');
            c.classList.add('inactiva');
        });
        card.classList.remove('inactiva');
        card.classList.add('activa');
    });
});