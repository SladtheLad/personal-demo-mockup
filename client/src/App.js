import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import gameImage from './assets/images/placeholder_games_cover.png';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <select name="view games">
            <option value="browse all">&#8734;Browse All Games</option>
            <option value="first-person">&#128299; First-Person Shooting Games</option>
            <option value="role-playing">&#9861;Role-Playing Games</option>
          </select>
          <div>
            <img src={gameImage} alt="Game Placeholder" />
            <p>GAME TITLE</p>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
