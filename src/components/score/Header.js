/* Header component, hierin worden Playername en de Wind geladen
Misschien nog ronde nr of andere informatie binnen het grote geheel? */
import React, { PropTypes } from 'react';
import Player from './Player'
import Wind from './Wind'

const Header = props => {
  return (
    <div className="header">
      <Player />
      <h1>Scores</h1>
      <Wind />
    </div>
  )
}

export default Header;
