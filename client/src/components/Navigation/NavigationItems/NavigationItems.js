import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import gamingConsole from '../../../assets/images/icons8-game-controller-24.png';
import dashboard from '../../../assets/images/icons8-billboard-24.png';
import crown from '../../../assets/images/icons8-crown-24.png';
import support from '../../../assets/images/icons8-support-24.png';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact img={dashboard}>Dashboard</NavigationItem>
    <NavigationItem link="/" img={gamingConsole}>Games</NavigationItem>
    <NavigationItem link="/" img={crown}>Leaderboards</NavigationItem>
    <NavigationItem link="/" img={support}>Support</NavigationItem>
  </ul>
);

export default navigationItems;