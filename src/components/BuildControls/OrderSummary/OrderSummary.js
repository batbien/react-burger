import React from "react";

import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";

const orderSummary = (props) => {

  let ingrs = Object.keys(props.ingredients)
    .map(
      key => {
        return <li key={key}> <span>{key}</span>
    <span>{props.ingredients[key]}</span></li>
      });

  return (
    <div className={classes.OrderSummary}>
      <ul>
        {ingrs}
      </ul>
      <p>Total Price: {props.totalPrice}</p>
      <Button handleClick={props.handleCancelClick}>Cancel</Button>
      <Button handleClick={props.handleContinueClick}>Continue</Button>
    </div>
  );
};

export default orderSummary;
