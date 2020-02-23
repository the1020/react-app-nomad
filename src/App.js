import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div>
        <h1>{this.state.isLoading ? "Loading..." : "Ready"}</h1>
      </div>
    );
  }
}

export default App;
