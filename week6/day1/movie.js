const searchMovies = async () => {
    const movieCardContainer = document.querySelector(".movieCardContainer");
    movieCardContainer.innerHTML = "";
    const inputField = document
    .querySelector(".searchField")
    .value.replace(/\s/g, "+");
    const movieURL = `http://www.omdbapi.com/?apikey=########&s=${inputField}`;

    const rawData = await fetch(movieURL);
    const json = await rawData.json();

    json.Search.forEach(async (movie) => {
    const movieCard = document.createElement("div");
      //img
    const moviePoster = document.createElement("img");
      //h2
    const movieTitle = document.createElement("h2");
      // p
    const movieDescription = document.createElement("p");
      // p
    const movieYear = document.createElement("p");
    const imdbID = movie.imdbID;
    const individualMovieData = `http://www.omdbapi.com/?apikey={API KEY HERE}}=${imdbID}`;
    const fetchIndividualMovie = await fetch(individualMovieData);
    const individualJson = await fetchIndividualMovie.json();
      // modify
    movieCard.classList = "movieCard";
    moviePoster.classList = "moviePoster";
    moviePoster.src = individualJson.Poster;
    movieTitle.innerText = `${individualJson.Title} (${individualJson.Year})`;
    movieDescription.innerText = individualJson.Plot;

      // string interpolation

      // append
    movieCard.append(moviePoster, movieTitle, movieYear,movieDescription);
    movieCardContainer.append(movieCard);
    });
    //div
};

const searchButton = document.querySelector(".searchButton");

searchButton.addEventListener("click", searchMovies);