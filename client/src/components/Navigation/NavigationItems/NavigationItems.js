import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>DashBoard</NavigationItem>
    <NavigationItem link="/">Games</NavigationItem>
    <NavigationItem link="/">Leaderboards</NavigationItem>
    <NavigationItem link="/">Support</NavigationItem>
  </ul>
);

export default navigationItems;