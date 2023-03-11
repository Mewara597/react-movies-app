export function SearchList(props) {
  const { movie } = props;
  return (
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
  );
}
