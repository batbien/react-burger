import React from "react";

import classes from "./NavigationItem.module.css"

const navigationItem = (props) => {
  return <a className={classes.NavigationItem} href={props.href}>{props.label}</a>;
}

export default navigationItem;
