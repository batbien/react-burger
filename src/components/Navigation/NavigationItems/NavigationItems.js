import React, {Fragment} from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {

  const items = Object.keys(props.items)
    .map(
      key => {
        return (<NavigationItem label={key} key={key} href={props.items[key]} />);
      });

  return (<Fragment>{items}</Fragment>);
}

export default navigationItems;
