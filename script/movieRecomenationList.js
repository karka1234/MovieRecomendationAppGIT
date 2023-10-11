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
        moviesListElement.append(newElement);
        showMovieElement.append(moviesListElement);
    });
}
function resetHtmlSideIndexPageRecomendations(){
    const moviesListElement = document.querySelector(".moviesList");
    moviesListElement.innerHTML="";
}
function filterList(movieObjectsList){
    let genreFielt = document.querySelector("#genre");
    let releaseYearFielt = document.querySelector("#year");
    let ratingFielt = document.querySelector("#rating");
    let newArray = movieObjectsList.filter(function (el) {
        return el.genre == genreFielt.value  && el.year == releaseYearFielt.value && Math.round(el.rating) == +ratingFielt.value;               
    });
    return newArray;
}


const btnRecomendations = document.querySelector("#getRecomendationsButton");
btnRecomendations.addEventListener("click", ()=>{
    resetHtmlSideIndexPageRecomendations();
    let movieListFiltered = filterList(movieList);
    updateHtmlSideIndexPageRecomendations(movieListFiltered);
});

//updateHtmlSide(movieListFiltered);

// return el.genre == genreFielt.value  && +el.year == +releaseYearFielt.value && +Math.round(el.rating) == +ratingFielt.value;           