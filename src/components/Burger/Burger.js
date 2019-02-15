import React from "react";
import PropTypes from "prop-types";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";
const burger = (props) => {

  var ingredients = Object.keys(props.ingredients).length === 0? [] :
  Object.keys(props.ingredients)
    .reduce(
      (arr, key) => arr.concat([...Array(props.ingredients[key])].map(_ => key)), [])
    .map(
      (ingr, index) => <BurgerIngredient type={ingr} key={ingr + "-" + index}/>);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients.length ? ingredients : <b>Please select ingredients</b>}
      <BurgerIngredient type="bread-bottom" />
    </div>

  );
}

burger.propTypes = {
  ingredients: PropTypes.object.isRequired
}

export default burger;
