// Player geeft input; welke stenen heeft hij op tafel/plank
import React, { Component, PropTypes } from 'react'
import * as Tiles from '../../data/tiles';
import Tile from './Tile.js';
import TileBox from './TileBox.js'

class Input extends Component {
  state = {
    concealed: 10,
    exposed: 12,
    images: 56,

    scoreForm: {
      concealed: [
        {
          id:1,
          img: '/src/img/1.jpg',
          name: 'Seizoen 1',
          category: 1,
          wind:1
        },
        {
          id:2,
          img: '/src/img/2.jpg',
          name: 'Seizoen 2',
          category: 1,
          wind:2
        },
        {
          id:3,
          img: '/src/img/3.jpg',
          name: 'Seizoen 3',
          category: 1,
          wind:3
        },
      ],
      exposed: [],
      images: [],
    }
  };


  changeState = (e) => {
    const field = e.target.name;
    this.setState({
      [field] : e.target.value
    });
  };

  addScore = (e) => {
    if (e) e.preventDefault();
    this.props.addScore(this.state);
  };

  addConcealedScore = (e) => {
    if (e) e.preventDefault();

    let concealed = this.state.scoreForm.concealed;
    let newTile = Tiles.getTileById(this.state.concealed);

    let score = {
      concealed: concealed,
      exposed: this.state.exposed,
      images: this.state.images
    };

    this.setState({scoreForm: score});
  };

  render() {

    const { addScore } = this.props;
    //const concealedTiles = this.state.scoreForm.concealed.map((tile) => (
    //    <Tile
    //        tile={tile}
    //        />
    //));


    return (
      <form onSubmit={this.addScore}>
        <TileBox></TileBox>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

Input.propTypes = {
  addScore: PropTypes.func.isRequired
}

export default Input;
