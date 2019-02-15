import React, { Fragment } from "react";

import classes from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {

  let sideDrawerClasses = [];
  sideDrawerClasses.push(classes.SideDrawer);
  if (props.shown)
    sideDrawerClasses.push(classes.Shown);
  else
    sideDrawerClasses.push(classes.Hidden);

  return (
    <Fragment>
      <Backdrop handleBackdropClick={props.handleBackdropClick}
                shown={props.shown} backdropClass="Small-Screen"/>
      <div className = { sideDrawerClasses.join(" ") }>
        <NavigationItems items={props.navigationItems} />
      </div>
    </Fragment>
  );
}

export default sideDrawer;
