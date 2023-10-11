let movieList = JSON.parse(localStorage.movieList);

function updateHtmlSideIndexPageRecomendations(movieObjectsList){
    const showMovieElement = document.querySelector(".showMovies");
    const moviesListElement = document.querySelector(".moviesList");
    movieObjectsList.forEach((item) => { //img dar dadesiu gal
        let newElement = document.createElement('li');
        newElement.className = "movieLiElement";
        let movieName = document.createElement('h2');
        let movieDescription = document.createElement('h4');
        let movieRating = document.createElement('h4');
        let movie = document.createElement('img');
        if(item.imgSrc != ""){
            movie.src = item.imgSrc;
            newElement.append(movie);
        }
        movieName.textContent =`${item.name}  ${item.year}` ;
        movieDescription.textContent = `Genre : ${item.genre}`;
        movieRating.textContent = `Rating : ${item.rating}`;
        newElement.append(movieName);
        newElement.append(movieDescription);
        newElement.append(movieRating);

        showMovieElement.append(newElement);
    });
}
function filterList(movieObjectsList){
    let genreFielt = document.querySelector("#genre");
    let releaseYearFielt = document.querySelector("#releaseYear");
    let ratingFielt = document.querySelector("#rating");

    let newArray = movieObjectsLists.filter(function (el) {
            return el.genre == genreFielt.value;
    });

    return newArray;
}


const btnRecomendations = document.querySelector("#getRecomendationsButton");
btnRecomendations.addEventListener("click", ()=>{
    let movieListFiltered = filterList(movieList);
    updateHtmlSideIndexPageRecomendations(movieListFiltered);
});

//updateHtmlSide(movieListFiltered);