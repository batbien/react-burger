import React from "react";
import PropTypes from "prop-types";

import classes from "./BuildControl.module.css";

const BuildControl = (props) => {


  return (
    <div className={classes.BuildControl}>
      <span className={classes.IngrLabel}>{props.label}</span>
      <button className={classes.Less}
      onClick={(event) => props.handleLessClick(event, props.label)}
      disabled={props.disabledIngredients[props.label]}>Less</button>
      <button className={classes.More}
      onClick={(event) => props.handleMoreClick(event, props.label)}>More</button>
    </div>
  );
};

BuildControl.propTypes = {
  label: PropTypes.string.isRequired
};

export default BuildControl;
