document.addEventListener('DOMContentLoaded', function() {
    populateDropdown();

    if (movieList.length > 0) {
        populateForm();
    }
});

function populateDropdown() {
    const dropdown = document.getElementById('editMovieDropdown');
    movieList.forEach(movie => {
        let option = document.createElement('option');
        option.value = movie.name;
        option.textContent = movie.name;
        dropdown.append(option);
    });
}

function populateForm() {
    const selectedMovieName = document.getElementById('editMovieDropdown').value;
    const selectedMovie = movieList.find(movie => movie.name === selectedMovieName);

    document.getElementById('editName').value = selectedMovie.name;
    document.getElementById('editGenre').value = selectedMovie.genre;
    document.getElementById('editYear').value = selectedMovie.year;
    document.getElementById('editRating').value = selectedMovie.rating;
}

function updateMovieDetails() {
    const updatedName = document.getElementById('editName').value;
    const updatedGenre = document.getElementById('editGenre').value;
    const updatedYear = parseInt(document.getElementById('editYear').value, 10);
    const updatedRating = parseFloat(document.getElementById('editRating').value);

    // Find the movie in the movieList and update its details
    const movieToUpdate = movieList.find(movie => movie.name === updatedName);
    if (movieToUpdate) {
        movieToUpdate.genre = updatedGenre;
        movieToUpdate.year = updatedYear;
        movieToUpdate.rating = updatedRating;
    }

    pushDefaultMoviesToLocalStorage(movieList); // Update localStorage with edited details
}