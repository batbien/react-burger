import React from "react";

import classes from "./Logo.module.css";
import Logo from "../../../assets/img/burger-logo.png"

const logo = (props) => {
  return (<img  className={classes.Logo} src={Logo} alt="Burger Inc."/>);

};

export default logo;
