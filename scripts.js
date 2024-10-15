const characters = document.querySelectorAll('.character-card');

characters.forEach(character => {
    character.addEventListener('mouseover', () => {
        character.style.transform = 'scale(1.1)';
        character.style.transition = 'transform 0.3s ease';
    });
    character.addEventListener('mouseout', () => {
        character.style.transform = 'scale(1)';
    });
});


const carouselContainer = document.querySelector('.carousel-container');
let isDragging = false;

carouselContainer.addEventListener('mousedown', () => {
    isDragging = true;
});

carouselContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

carouselContainer.addEventListener('mousemove', (e) => {
    if (isDragging) {
        carouselContainer.scrollLeft -= e.movementX;
    }
});
