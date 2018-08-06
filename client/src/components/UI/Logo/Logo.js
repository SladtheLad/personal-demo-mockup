import React from 'react';

import Logo from '../../../assets/images/Logo.PNG';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <a href="/"><img src={Logo} alt="PvP Live Logo" /></a>
  </div>
);

export default logo;