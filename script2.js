document.addEventListener('DOMContentLoaded', () => {
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            // Handle movie click event (can be expanded for movie details)
            console.log('Movie clicked:', card.querySelector('.movie-title').textContent);
        });
    });
});