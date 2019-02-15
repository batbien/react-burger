import React from "react";

import classes from "./Backdrop.module.css";
const Backdrop = (props) => {

    let backdropClasses = [];
    backdropClasses.push(classes.Backdrop);
    if (props.shown)
      backdropClasses.push(classes.Shown);
    else
      backdropClasses.push(classes.Hidden);

    if (props.backdropClass)
      backdropClasses.push(classes[props.backdropClass]);

    return (<div className={backdropClasses.join(" ")}
       onClick={props.handleBackdropClick}></div>);
}

export default Backdrop;
