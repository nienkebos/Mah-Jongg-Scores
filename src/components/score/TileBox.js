import React, { Component, PropTypes } from 'react'
import * as Tiles from '../../data/tiles';
var FontAwesome = require('react-fontawesome');
import Tile from './Tile';

class TileBox extends Component {
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




    render() {

        const tileImages = Tiles.getTiles();
        const showTiles = tileImages.map((tile) => (
              <Tile
                  tile={tile}
              />
        ));
        const tile = {img:'test.jpg'};

        return (
            <div className="tile-box">

                <div className="add-tile">
                    Add your concealed tiles
                    <FontAwesome name='plus' className="add-button" />

                    <div className="tiles-to-add">
                        {showTiles}
                    </div>
                </div>

                <div className="score-list">

                </div>
            </div>
        )
    }
}

//AddTiles.propTypes = {
//    addScore: PropTypes.func.isRequired
//}

export default TileBox;