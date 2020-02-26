import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //BrowserRouter를 사용해도 되지만 github pages에 업로드 시 복잡...
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </BrowserRouter>
  );
}

export default App;
