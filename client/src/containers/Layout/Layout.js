import React, { Component } from 'react';

import classes from "./Layout.css";
import NavBar from '../../components/Navigation/NavBar/NavBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import gameImage from '../../assets/images/placeholder_games_cover.png';


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
        <main className={classes.Content}>
          {this.props.children}
          <select name="view games">
            <option value="browse all">&#8734; Browse All Games</option>
            <option value="first-person">&#128299; First-Person Shooting Games</option>
            <option value="role-playing">&#9861; Role-Playing Games</option>
          </select>
          <div>
            <img src={gameImage} alt="Game Placeholder" />
            <p>GAME TITLE</p>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default Layout;