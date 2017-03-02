import React, { Component, PropTypes } from 'react'
var FontAwesome = require('react-fontawesome');

const Tile = props => {
    return (
        <div className="tile">
            <FontAwesome name='close' size='2x' />
            <img src={props.tile.img}/>
        </div>
    )
}

export default Tile;