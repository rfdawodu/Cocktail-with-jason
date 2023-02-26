import CocktailDrinks from "./component/CoctailDrinks";

import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  const [cockTail, setCockTail] = useState([]);

  const fetchUrl = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCockTail(data.drinks))
      .catch((err) => console.log(err));
  };
  fetchUrl();
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
    <>
      <h1>cock tail with json</h1>
      {cockTail.length > 0 ? (
        <div className="App">
          {cockTail.map((cocktail) => (
            <CocktailDrinks
              key={cocktail.idDrink}
              strDrink={cocktail.strDrink}
              strDrinkThumb={cocktail.strDrinkThumb}
              strInstructions={cocktail.strInstructions}
              strIngredient1={cocktail.strIngredient1}
              strIngredient2={cocktail.strIngredient2}
              strIngredient3={cocktail.strIngredient3}
              strIngredient4={cocktail.strIngredient4}
              strIngredient5={cocktail.strIngredient5}
              strIngredient6={cocktail.strIngredient6}
              strMeasure1={cocktail.strMeasure1}
              strMeasure2={cocktail.strMeasure2}
              strMeasure3={cocktail.strMeasure3}
            />
          ))}
        </div>
      ) : (
        <p>please wait...</p>
      )}
    </>
  );
}

export default App;
