import React from "react";
import { connect } from "react-redux";

import { addMovietoList, searchMovie } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleAddMovieClickEvent = (movie) => {
    this.props.dispatch(addMovietoList(movie));
    this.setState({
      searchText: "",
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(searchMovie(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { results: movie, showResults } = this.props.search;
    // console.log("results movie", movie.Search);

    return (
      <div className="nav">
        <div className="search-container">
          <input value={this.state.searchText} onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
        </div>
        {showResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={movie.Poster} alt="movie-Poster" />

              <div className="movie-info">
                <span>{movie.Title}</span>
                <button onClick={() => this.handleAddMovieClickEvent(movie)}>
                  Add to Movies
                </button>
              </div>
            </div>
          </div>
        )}

        {/* {results.Search.map((movie)=> <div className="search-results">{movie.Title}</div>)} */}
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);
