import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe-info">
      <div className="info-wrapper">
        <h1 className="recipe-h1">{title}</h1>
        <ul className="recipe-ul">
          {ingredients.map((ingredients) => (
            <li>{ingredients.text}</li>
          ))}
        </ul>
        <p className="recipe-p">Calories: {calories}</p>
      </div>
      <img className="recipe-img" src={image} alt="" />
    </div>
  );
};

export default Recipe;
