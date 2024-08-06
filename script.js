document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
        const recipeName = card.getAttribute('data-recipe-name').toLowerCase();
        if (recipeName.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.querySelectorAll('.view-recipe').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const recipeId = this.getAttribute('data-recipe-id');
        document.querySelectorAll('.recipe-details').forEach(detail => {
            detail.style.display = 'none';
        });
        document.getElementById(`recipe-${recipeId}`).style.display = 'block';
    });
});
