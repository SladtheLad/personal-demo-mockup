import React from 'react';

import classes from './NavBar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Balance from '../../Balance/Balance';
import stockPortrait from '../../../assets/images/stock-portrait.jpg';
import DrawerButton from '../SideDrawer/DrawerButton/DrawerButton';

const navbar = (props) => (
  <header className={classes.NavBar} >
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <DrawerButton clicked={props.drawerToggleClicked} />
    <nav>
      <a href="/">&#43; Add Funds</a>
      <Balance className={classes.Balance} />
      <img src={stockPortrait} alt="Stock Portrait" />
    </nav>
  </header>
);

export default navbar;