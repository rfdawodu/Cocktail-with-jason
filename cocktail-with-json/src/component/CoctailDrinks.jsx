import { useState } from "react";

const CocktailDrinks = ({
  idDrink,
  strDrink,

  strTags,
  strAlcoholic,
  strGlass,
  strInstructions,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strDrinkThumb,
}) => {
  return (
    <>
      <p>{idDrink}</p>
      <h2>{strDrink}</h2>
      <p>{strAlcoholic}</p>
      <p>{strTags}</p>
      <p>{strGlass}</p>

      <p>{strInstructions}</p>

      <ol>
        <li>{strIngredient1}</li>
        <li>{strIngredient2}</li>
        <li>{strIngredient3}</li>
        <li>{strIngredient4}</li>
        <li>{strIngredient5}</li>
        <li>{strIngredient6}</li>
      </ol>
      <h4>Measurement</h4>
      <ul>
        <li>{strMeasure1}</li>
        <li>{strMeasure1}</li>
        <li>{strMeasure1}</li>
      </ul>

      <img src={strDrinkThumb} />
    </>
  );
};

export default CocktailDrinks;
