// {
//     type:"ADD_MOVIES";
//     movie:[m1,m2,m3];
// }
//types  of action
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}
export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie,
  };
}
export function showFavourite(val) {
  return {
    type: SHOW_FAVOURITES,
    val,
  };
}
// export function handleAddMovieToList(movie) {
//   console.log(movie);
//   const url = `http://www.omdbapi.com/?i=tt3896198&apikey=cdfddc95&t=${movie}`;
//   return function (dispatch) {
//     fetch(url)
//       .then((response) => response.json())
//       .then((movie) => {
//         console.log("movie", movie);
//         //dispatch an action to store the movie to the store
//         dispatch(addMovietoList(movie));
//       });
//   };
// }
export function addMovietoList(movie) {
  console.log("this is addMovietolist");
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export function searchMovie(movie) {
  const url = `http://www.omdbapi.com/?apikey=cdfddc95&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        dispatch(movieSearch(movie));
      });
  };
}

export function movieSearch(movie) {
  return {
    type: SEARCH_MOVIE,
    movie,
  };
}
