import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);

    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div>
        {this.state.movies.map(current => {
          console.log(current);
          return (
            <Movie
              key={current.id}
              id={current.id}
              year={current.year}
              title={current.title}
              summary={current.summary}
              poster={current.medium_cover_image}
            ></Movie>
          );
        })}
      </div>
    );
  }
}

export default App;
