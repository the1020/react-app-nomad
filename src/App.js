import React from "react";

class App extends React.Component {
  state = {
    count: 0,
    isLoading: true
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Mount");

    setInterval(() => {
      this.setState(current => ({ isLoading: false }));
    }, 6000);
  }
  componentDidUpdate() {
    console.log("Update");
  }

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <h1>{this.state.isLoading ? "Loading..." : "Ready"}</h1>
      </div>
    );
  }
}

export default App;
