import React, { Component } from 'react';

import classes from "./Layout.css";
import NavBar from '../../components/Navigation/NavBar/NavBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import legendOfMana from '../../assets/images/legend-of-mana.jpg';
import crashBandicoot from '../../assets/images/crash-bandicoot-2.jpg';
import dukesOfHazard from '../../assets/images/dukes-of-hazard.jpg';
import legendOfZelda from '../../assets/images/legend-of-zelda.jpg';
import animalCrossing from '../../assets/images/animal-crossing.jpg';
import warioLand from '../../assets/images/wario-land.png';
import projectJustice from '../../assets/images/project-justice.jpg';


class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }


  render() {
    return (
      <React.Fragment>
        <NavBar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <div className={classes.Content}>
          {this.props.children}
          <div className={classes.Browse}>
            <select name="view games">
              <option value="browse all">&#8734; Browse All Games</option>
              <option value="first-person">&#128299; First-Person Shooting Games</option>
              <option value="role-playing">&#9861; Role-Playing Games</option>
            </select>
          </div>
          <div className={classes.Card}>
            <img src={crashBandicoot} alt="Crash Bandicoot 2" />
            <p className={classes.CardTitle}>Crash Bandicoot 2: Cortex Strikes Back</p>
          </div>
          <div className={classes.Card}>
            <img src={legendOfMana} alt="Legend of Mana" />
            <p className={classes.CardTitle}>Legend of Mana</p>
          </div>
          <div className={classes.Card}>
            <img src={legendOfZelda} alt="Legend of Zelda" />
            <p className={classes.CardTitle}>The Legend of Zelda: Link's Awakening</p>
          </div>
          <div className={classes.Card}>
            <img src={projectJustice} alt="Project Justice" />
            <p className={classes.CardTitle}>Project Justice</p>
          </div>
          <div className={classes.Card}>
            <img src={warioLand} alt="Wario Land" />
            <p className={classes.CardTitle}>Virtual Boy Wario Land</p>
          </div>
          <div className={classes.Card}>
            <img src={animalCrossing} alt="Animal Crossing" />
            <p className={classes.CardTitle}>Animal Crossing</p>
          </div>
          <div className={classes.Card}>
            <img src={dukesOfHazard} alt="Dukes of Hazard" />
            <p className={classes.CardTitle}>The Dukes of Hazzard: Racing for Home</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout;