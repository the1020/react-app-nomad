import React from "react";

//props.Fav = {fav}
function Food({ name }) {
  return (
    <div>
      <h3>I like {name}</h3>
      {/* <img src={picture}></img> */}
    </div>
  );
}

const FoodIlike = [
  {
    name: "kimchi",
    key: 1
  },
  {
    name: "hamburger",
    key: 2
  },
  {
    name: "pizza",
    key: 3
  }
];

function App() {
  return (
    <div>
      {FoodIlike.map(current => console.log(current))}
      {FoodIlike.map(current => (
        <Food name={current.name} key={current.key}></Food>
      ))}
      {/* FoodIlike의 name과 image 각각 props로 넘겨줘도 되지만 object로 하나의 props로 넘겨서 사용하는것도 가능! */}
      {/* {FoodIlike.map(current => (
        <Food Info={current}></Food>
      ))} */}
    </div>
  );
}

export default App;
