import React, { Fragment, Component } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

class Layout extends Component {

  state = {
    sidebarShown: false
  }

  navigationItems = {
    "Home": "/",
    "Burger Builder": "/burgerbuilder",
    "Contact": "/contact"
  }

  toogleSidebar = (event) => {
    this.setState((prevState) => {
      return { sidebarShown: !prevState.sidebarShown }
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar navigationItems={this.navigationItems}
                handleToogleClick={this.toogleSidebar}/>
        <SideDrawer navigationItems={this.navigationItems}
                shown={this.state.sidebarShown}
                handleBackdropClick={this.toogleSidebar}/>
        <main className={classes.Main}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

export default Layout;
