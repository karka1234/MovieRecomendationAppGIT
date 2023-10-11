function pushDefaultMoviesToLocalStorage(moviesToPush){
    localStorage.movieList = JSON.stringify(moviesToPush);////objektui butinas sitas
    console.log(JSON.stringify(moviesToPush));
}
function Movie(name, genre, year, rating, imgSrc = ""){ //filmo objektas
    if(typeof(name) != "string" && name === "")
        return;
    if(typeof(genre) != "string" && genre === "")
        return;
    if(typeof(year) != "number" && year === 0)
        return;
    if(typeof(rating) != "number" && rating === 0)
        return;
    this.name = name;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
    this.imgSrc = imgSrc;
    this.getMovieString = function () { return `${this.name} : ${this.genre} ${this.year} ${this.rating}`};    
}
function AddMovieWithPromts(){
    const newMovie = new Movie(
        prompt("Enter Movie name"),
        prompt("Enter Movie genre"),
        +prompt("Enter Movie year"),
        +prompt("Enter Movie rating"));
    return newMovie;
}
function updateHtmlSide(movieObjectsList){
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
function loader(){
    const movie1 = new Movie("Inception", "Science Fiction", 2010, 8.8, "../img/Pradžia (2010).png");
    const movie2 = new Movie("The Shawshank Redemption", "Drama", 1994, 9.3, "../img/Pabėgimas iš Šoušenko (1994).png");
    const movie3 = new Movie("The Dark Knight", "Action", 2008, 9.0,"../img/Tamsos riteris (2008).png");
    const movie4 = new Movie("Pulp Fiction", "Crime", 1994, 8.9, "../img/Bulvarinis skaitalas (1994).png");
    const movie5 = new Movie("Forrest Gump", "Drama", 1994, 8.8, "../img/Forestas Gampas (1994).png");

    movieList.push(movie1);
    movieList.push(movie2);
    movieList.push(movie3);
    movieList.push(movie4);
    movieList.push(movie5);
    if(!localStorage.movieList)//uzkrauna tik tada kai nera dar sukurto
        pushDefaultMoviesToLocalStorage(movieList); //hardkodintus filmus uzkrauna
    else
        movieList = JSON.parse(localStorage.movieList);
    updateHtmlSide(movieList);
}
let movieList = []; // filmu listas
loader();//page loader / uzloadina lista / ir default filmu reiksmes jei pas vartotoja dar nera

const addMoveiButton = document.querySelector("#addMovie");
addMoveiButton.addEventListener("click", ()=> {
    let newMovie = AddMovieWithPromts();
    movieList.push(newMovie);
    pushDefaultMoviesToLocalStorage(movieList);
    updateHtmlSide(movieList);
});

