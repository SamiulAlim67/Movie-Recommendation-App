// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const movieForm = document.getElementById('movieForm');
    const movieResults = document.getElementById('movieResults');

    movieForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const genre = document.getElementById('genre').value;
        
        // Simulated fetch request (replace with actual API call)
        setTimeout(function() {
            const recommendations = getRecommendations(genre);
            displayRecommendations(recommendations);
        }, 1000);
    });

    function getRecommendations(genre) {
        // Simulated recommendations (replace with actual data)
        const actionMovies = ['Inception', 'The Dark Knight', 'Interstellar', 'Mad Max: Fury Road', 'The Avengers'];
        const comedyMovies = ['Pulp Fiction', 'Forrest Gump', 'The Hangover', 'Superbad', 'Dumb and Dumber'];
        const dramaMovies = ['The Shawshank Redemption', 'Fight Club', 'Schindler\'s List', 'Goodfellas', 'The Godfather'];
        const horrorMovies = ['The Shining', 'Psycho', 'The Exorcist', 'A Nightmare on Elm Street', 'The Conjuring'];
        const romanceMovies = ['Titanic', 'The Notebook', 'Pride & Prejudice', 'La La Land', 'The Fault in Our Stars'];

        // Combine all movie arrays based on genre
        let allMovies = [];
        switch (genre) {
            case 'action':
                allMovies = actionMovies;
                break;
            case 'comedy':
                allMovies = comedyMovies;
                break;
            case 'drama':
                allMovies = dramaMovies;
                break;
            case 'horror':
                allMovies = horrorMovies;
                break;
            case 'romance':
                allMovies = romanceMovies;
                break;
            default:
                break;
        }

        return allMovies;
    }

    function displayRecommendations(recommendations) {
        movieResults.innerHTML = '';

        if (recommendations.length === 0) {
            movieResults.innerHTML = '<p>No recommendations found.</p>';
            return;
        }

        // Display movie names
        recommendations.forEach(function(movie) {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.textContent = movie; // Set movie name as text content
            movieResults.appendChild(movieDiv);
        });

        // Show movie results section
        movieResults.style.display = 'block';
    }
});
