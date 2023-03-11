import { combineReducers } from "redux";
import {
  ADD_FAVOURITE,
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  REMOVE_FAVOURITE,
  SEARCH_MOVIE,
  SHOW_FAVOURITES,
} from "../actions";

const intialState = {
  list: [],
  favourite: [],
  showFavourites: false,
};

export function movies(state = intialState, action) {
  // if(action.type===ADD_MOVIES){
  //     return {

  //         ...state,
  //         list:action.movie,

  //     }
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourite: [action.movie, ...state.favourite],
      };
    case REMOVE_FAVOURITE:
      // console.log('state.favourite',state.favourite)
      const newFavourites = state.favourite.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourite: newFavourites,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };
    default:
      return state;
  }
}

const intialSearchState = {
  results: {},
  showResults: false,
};

export function search(state = intialSearchState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        results: action.movie,
        showResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showResults: false,
      };
    default:
      return state;
  }
}

// const intialRootState={
//     movies:intialState,
//     search:intialSearchState
// }
// export default function rootReducer(state=intialRootState,action){
//     return {
//         movies:movie(state.movies,action),
//         search:search(state.search,action)
//     }
// }
export default combineReducers({
  movies,
  search,
});
