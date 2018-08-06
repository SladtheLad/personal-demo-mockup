import React from 'react';

import classes from './NavBar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Balance from '../../Balance/Balance';
import profile from '../../../assets/images/profile.JPEG';
import DrawerButton from '../SideDrawer/DrawerButton/DrawerButton';

const navbar = (props) => {
  // before JSX is returned, want to conditionally attach CSS classes/animations
  // That's why it needs a full function body.
  let attachedClasses = [classes.NavBar, classes.Close];
  if (props.open) {
    attachedClasses = [classes.NavBar, classes.Open];
  }
  return (
    <header className={attachedClasses.join(' ')} >
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <DrawerButton show={props.open} clicked={props.drawerToggleClicked} />
      <nav>
        <a href="/">&#43; Add Funds</a>
        <Balance className={classes.Balance} />
        <img src={profile} alt="Profile" />
      </nav>
    </header>
  );
};

export default navbar;