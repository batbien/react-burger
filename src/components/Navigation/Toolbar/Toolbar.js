import React from "react";

import classes from "./Toolbar.module.css"
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../UI/Logo/Logo";


const toolbar = (props) => {

  return (
    <header className={classes.Toolbar}>
      <div className={classes.Hamburger} onClick={props.handleToogleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Logo />
      <nav className={classes.NavItems}>
        <NavigationItems items={props.navigationItems}/>
      </nav>
    </header>
  );
}

export default toolbar;
