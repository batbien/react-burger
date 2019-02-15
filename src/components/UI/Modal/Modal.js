import React, { Component, Fragment } from "react";

import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.shown || nextProps.shown;
  }

  render() {
    var modalClasses = [];
    modalClasses.push(classes.Modal);
    if (this.props.shown)
      modalClasses.push(classes.Shown);
    else
      modalClasses.push(classes.Hidden);

    return (
      <Fragment>
        <div className={modalClasses.join(" ")}>
        { this.props.children }
        </div>
        <Backdrop handleBackdropClick={ this.props.handleBackdropClick }
         shown={this.props.shown} />
      </Fragment>
    );
  }

}

export default Modal;
