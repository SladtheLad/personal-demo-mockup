import React from 'react';

import classes from './Balance.css';

const balance = (props) => (
  <div className={classes.Balance}> 
    <p className={classes.Bold}>$0.00</p>
    <p className={classes.Small}>BALANCE</p>
  </div>
);

export default balance;