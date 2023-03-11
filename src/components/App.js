import React from "react";
// import { connect } from "react-redux";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies, showFavourite } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
    console.log("STATE", this.props);
  }
  isMovieFavourote = (movie) => {
    const { movies } = this.props;
    const index = movies.favourite.indexOf(movie);
    if (index !== -1) {
      // found movie is favourite
      return true;
    }
    return false;
  };
  handleClickEvent = (val) => {
    this.props.dispatch(showFavourite(val));
  };

  render() {
    // const {list ,favourite,showFavourites} = this.props.store.getState();  //{return {movie intialState}}
    // console.log("STATE", this.props);

    const { movies, search } = this.props; //return {movies , search}
    const { list, favourite, showFavourites } = movies; //return {movies,search}

    // console.log("movies",list);

    const displayList = showFavourites ? favourite : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.handleClickEvent(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => {
                this.handleClickEvent(true);
              }}
            >
              Fravorites
            </div>
          </div>
          <div className="list">
            {displayList.map((movie, index) => {
              // console.log(movie);
              return (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.dispatch}
                  isFavourite={this.isMovieFavourote(movie)}
                />
              );
            })}
          </div>
          {displayList.length == 0 && (
            <div className="no-movies">There is no movies to display</div>
          )}
        </div>
      </div>
    );
  }
}
// class AppWaper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
function callback(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;
