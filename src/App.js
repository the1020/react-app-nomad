import React from "react";

//props.Fav = {fav}
function Food({ fav }) {
  console.log(fav);
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="hamburger" />
      <Food fav="pizza" />
    </div>
  );
}

export default App;
