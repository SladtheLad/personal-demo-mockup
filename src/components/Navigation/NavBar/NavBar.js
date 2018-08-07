import React from 'react';

import classes from './NavBar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Balance from '../../Balance/Balance';
import profile from '../../../assets/images/profile.JPEG';
import DrawerButton from '../SideDrawer/DrawerButton/DrawerButton';
import plus from '../../../assets/images/icons8-plus-24.png';

const navbar = (props) => {
  // // before JSX is returned, want to conditionally attach CSS classes/animations
  // // That's why it needs a full function body.
  // let attachedClasses = [classes.NavBar, classes.Close];
  // if (props.open) {
  //   attachedClasses = [classes.NavBar, classes.Open];
  // }
  return (
    <header className={classes.NavBar}>
      <DrawerToggle className={classes.DrawerToggle} clicked={props.drawerToggleClicked} />
      <DrawerButton show={props.open} clicked={props.drawerToggleClicked} />
      <nav>
        <a href="/" className={classes.AddButton}>
          <img src={plus} />
          Add Funds
        </a>
        <Balance className={classes.Balance} />
        <img src={profile} alt="Profile" className={classes.Profile}/>
      </nav>
    </header>
  );
};

export default navbar;