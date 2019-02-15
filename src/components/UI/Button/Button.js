import React from "react";

import classes from "./Button.module.css";

const button = (props) => {

  let buttonClasses = [classes.Button];
  if (props.buttonClass)
    buttonClasses.push(classes[props.buttonClass]);

  return (
    <button className={buttonClasses.join(" ")}
    disabled={props.isDisabled}
    onClick={props.handleClick}>{props.children}</button>
  );

};


export default button;
