import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import Button from "../UI/Button/Button";
import classes from "./BuildControls.module.css";

const BuildControls = (props) => {

  const buildControls = props.ingredientList.map((ingr) =>
    <BuildControl label={ingr} handleLessClick={props.handleLessClick}
    handleMoreClick={props.handleMoreClick}
    disabledIngredients={props.disabledIngredients} key={ingr}
    />);

  return (
    <div className={classes.BuildControls}>
    {buildControls}
    <Button handleClick={props.handlePurchaseClick}
    isDisabled={!props.purchaseable} buttonClass="Purchase">
    Check Out
    </Button>
    </div>
  );
};

export default BuildControls;
