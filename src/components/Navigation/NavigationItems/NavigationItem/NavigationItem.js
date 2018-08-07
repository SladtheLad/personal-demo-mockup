import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <img src={props.img} alt="Nav Icon" />
    <a
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}>{props.children}</a>
  </li>
);

export default navigationItem;