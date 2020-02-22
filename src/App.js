import React from "react";
import PropTypes from "prop-types";
//props.Fav = {fav}
function Food({ name, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}</h4>
      {/* <img src={picture}></img> */}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number.isRequired
};

const FoodIlike = [
  {
    name: "kimchi",
    key: 1,
    rating: 5
  },
  {
    name: "hamburger",
    key: 2,
    rating: 4
  },
  {
    name: "pizza",
    key: 3,
    rating: 3.3
  }
];

function App() {
  return (
    <div>
      {FoodIlike.map(current => console.log(current))}
      {FoodIlike.map(current => (
        <Food
          name={current.name}
          key={current.key}
          rating={current.rating}
        ></Food>
      ))}
      {/* FoodIlike의 name과 image 각각 props로 넘겨줘도 되지만 object로 하나의 props로 넘겨서 사용하는것도 가능! */}
      {/* {FoodIlike.map(current => (
        <Food Info={current}></Food>
      ))} */}
    </div>
  );
}

export default App;
